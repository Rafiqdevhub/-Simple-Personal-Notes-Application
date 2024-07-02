const express = require("express");

const router = express.Router();

const {
  createNote,
  getNotes,
  updatedNote,
  deleteNote,
  getNoteById,
} = require("../controllers/NoteController");

router.post("/createNote", createNote);

router.get("/getNotes", getNotes);

router.get("/getNote/:id", getNoteById);

router.patch("/updateNote/:id", updatedNote);

router.delete("/deleteNote/:id", deleteNote);

module.exports = router;
