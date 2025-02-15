import mongoose from "mongoose";

const bookNotesSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
  noteBookName: { type: String, required: true },
  noteBookLink: { type: String, required: true },
  message: { type: String, required: true },
}, {timestamps: true});

const bookNotesModel = new mongoose.model("BookNotes", bookNotesSchema);

export default bookNotesModel;