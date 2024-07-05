function NoteList({ notes, setCurrentNote, deleteNote }) {
  return (
    <div className="col-span-1">
      <h2 className="text-xl font-bold mb-4">Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id} className="mb-2">
            <div className="p-4 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p>{note.content}</p>
              <button
                onClick={() => setCurrentNote(note)}
                className="mr-2 text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
