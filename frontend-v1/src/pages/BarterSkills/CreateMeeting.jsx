import React, { useState } from "react";
import VideoCall from "../../components/VideoCall/VideoCall.jsx";

const CreateMeeting = () => {
  const [meetingId, setMeetingId] = useState("");
  const [startMeeting, setStartMeeting] = useState(false);

  const handleStartMeeting = () => {
    if (meetingId.trim() !== "") {
      const newMeeting = {
        id: meetingId,
        title: `Meeting: ${meetingId}`,
        joinLink: `${window.location.origin}/${meetingId}`,
      };

      setStartMeeting(true); // Switch to VideoCall component
    } else {
      alert("Please enter a valid meeting ID.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!startMeeting ? (
        <div>
          <h2>Create a New Meeting</h2>
          <input
            type="text"
            placeholder="Enter Meeting ID"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            style={{ padding: "10px", marginRight: "10px" }}
          />
          <button onClick={handleStartMeeting} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Start Meeting
          </button>
        </div>
      ) : (
        <VideoCall meetingId={meetingId} />
      )}
    </div>
  );
};

export default CreateMeeting;
