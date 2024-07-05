import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notes")
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const addNote = (note) => {
    axios
      .post("http://localhost:5000/api/notes", note)
      .then((response) => setNotes([...notes, response.data]))
      .catch((error) => console.error("Error adding note:", error));
  };

  const updateNote = (updatedNote) => {
    axios
      .put(`http://localhost:5000/api/notes/${updatedNote.id}`, updatedNote)
      .then((response) =>
        setNotes(
          notes.map((note) =>
            note.id === response.data.id ? response.data : note
          )
        )
      )
      .catch((error) => console.error("Error updating note:", error));
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => setNotes(notes.filter((note) => note.id !== id)))
      .catch((error) => console.error("Error deleting note:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Notes</h1>
      <div className="grid grid-cols-3 gap-4">
        <NoteList
          notes={notes}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
        {currentNote ? (
          <NoteDetail note={currentNote} />
        ) : (
          <NoteForm addNote={addNote} updateNote={updateNote} />
        )}
      </div>
    </div>
  );
}

export default App;
