import Message from "../Models/chatModels.js";

export const postMessage = async (req, res) => {
  try {
    const { userId, skill, message } = req.body;

    if (!skill || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Message({ user: userId, skill, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    console.error("Error posting message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addComment = async (req, res) => {
  try {
    /**
		 * {
    "messageId": "67b06564398ab3262e924446",
    "userId": "67b061b521857fde1e971bc7",
    "commentText": "I'm interested! Let's connect."
}
		 */
    const { messageId, userId, commentText } = req.body;

    if (!messageId || !userId || !commentText) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //67b06564398ab3262e924446
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    message.comments.push({ user: userId, comment: commentText });
    await message.save();

    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("user", "username") // Populate message owner with only the username
      .populate("comments.user", "username"); // Populate comment owners with only the username

    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
