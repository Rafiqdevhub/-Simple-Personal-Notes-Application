const express = require("express");

const router = express.Router();

const {
  createNote,
  getNotes,
  updatedNote,
  deleteNote,
} = require("../controllers/NoteController");

router.post("/createNote", createNote);

router.get("/getNotes", getNotes);

router.patch("/updateNote/:id", updatedNote);

router.delete("/deleteNote/:id", deleteNote);

module.exports = router;
