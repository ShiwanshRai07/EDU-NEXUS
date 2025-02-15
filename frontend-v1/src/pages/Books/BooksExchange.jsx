import React, { useState } from "react";
import "./BooksList.css";

const BooksList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "JavaScript Basics", user: "Alice", fileUrl: "/books/js-basics.pdf" },
    { id: 2, title: "React Guide", user: "Bob", fileUrl: "/books/react-guide.pdf" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newFile, setNewFile] = useState(null);

  const handleUpload = () => {
    if (!newTitle || !newUser || !newFile) {
      alert("Please enter all details and select a file.");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: newTitle,
      user: newUser,
      fileUrl: URL.createObjectURL(newFile),
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewUser("");
    setNewFile(null);
  };

  return (
    <div className="books-container">
      <h1>Book Sharing Platform 📚</h1>

      <div className="upload-section">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setNewFile(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Book</button>
      </div>

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>Uploaded by: <strong>{book.user}</strong></p>
            <a href={book.fileUrl} download className="download-btn">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
