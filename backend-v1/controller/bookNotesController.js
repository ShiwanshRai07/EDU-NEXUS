import bookNotesModel from "../Models/bookNotesModels.js";

export const postBookNote = async (req, res) => {
  try {
    const { noteBookName, noteBookLink, message } = req.body;

    if (!noteBookName || !noteBookLink || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
		// de structuring
		// user:{
		// 	userId:"",

		// }
    const userId = req.user.userId; // Get user ID from token
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    const newBookNote = new bookNotesModel({
      noteBookName,
      noteBookLink,
      message,
      user: userId,
    });
    await newBookNote.save();

    res.status(201).json({ success: true, bookNote: newBookNote });
  } catch (error) {
    console.error("Error posting book note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBookNotes = async (req, res) => {
  try {
    const bookNotes = await bookNotesModel.find().populate("user", "username"); // Populate username of note creator

    res.status(200).json({ success: true, bookNotes });
  } catch (error) {
    console.error("Error fetching book notes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
