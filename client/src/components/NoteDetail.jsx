function NoteDetail({ note }) {
  return (
    <div className="col-span-2">
      <h2 className="text-xl font-bold mb-4">Note Details</h2>
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NoteDetail;
