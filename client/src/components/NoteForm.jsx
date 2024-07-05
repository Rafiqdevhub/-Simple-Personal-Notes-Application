import React, { useState, useEffect } from "react";

function NoteForm({ addNote, updateNote, note }) {
  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: note ? note.id : Date.now(),
      title,
      content,
    };
    if (note) {
      updateNote(newNote);
    } else {
      addNote(newNote);
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="col-span-2">
      <h2 className="text-xl font-bold mb-4">
        {note ? "Edit Note" : "New Note"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {note ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
