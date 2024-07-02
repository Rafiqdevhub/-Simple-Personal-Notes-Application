const Notes = require("../models/NotesModels");

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Notes({
      title,
      content,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getNote by id

const getNoteById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update notes

const updatedNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return; // Ensure function exits after sending response
    }
    // Update title or content if they are provided in the request
    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;

    await note.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete notes
const deleteNote = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    }
    await note.deleteOne();

    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createNote, getNotes, getNoteById, updatedNote, deleteNote };
