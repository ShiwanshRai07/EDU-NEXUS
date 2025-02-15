import dotenv from "dotenv";
dotenv.config();

async function liveVideoSessionController() {
  try {
    //console.log(process.env.SECRET_JWT_TOKEN_VDOSDK);
    const url = "https://api.videosdk.live/v2/sessions";
    const options = {
      method: "GET",
      headers: {
        //generated from jwt key by key symbol in the api dashboard
        Authorization: `${process.env.MY_VDOSDK_TOKEN}`, // No "Bearer" prefix
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    // Manually check for HTTP errors
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const result = await response.json();
    //console.log("API Response:", result); // Debugging log

    // Check if data structure is correct
    if (!result.data) {
      throw new Error("Invalid API response: No 'data' key found.");
    }

    const sessions = result.data; // Extract sessions
    //console.log("Sessions:", sessions);

    // Filter for active meetings (status === "ongoing")
    const activeMeetings = sessions
      .filter((session) => session.status === "ongoing") // Fix incorrect reference to 'data'
      .map((session) => ({
        sessionId: session.id,
        roomId: session.roomId,
        customRoomId: session.customRoomId,
        status: session.status,
      }));
    console.log(activeMeetings);
    // activeMeetings will be an empty array if no active meeting
    //
    //console.log("Active Meetings:", activeMeetings);
    return activeMeetings;
    //res.status(200).json({ activeMeetings });
  } catch (error) {
    console.error("Error Fetching Sessions:", error.message);
    //res.status(500).json({ error: "Failed to fetch active sessions" });
    return null;
  }
}

export default liveVideoSessionController;
