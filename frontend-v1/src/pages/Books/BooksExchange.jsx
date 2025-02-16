import React, { useState } from "react";
import "./BooksList.css";
import java from "../../assets/java.png";
import react from "../../assets/react.jpg";

const BooksList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "JavaScript for Absolute Beginners",
      user: "Alice",
      fileUrl: "https://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Absolute-Beginners.pdf",
      image: java,
    },
    {
      id: 2,
      title: "React Guide",
      user: "Bob",
      fileUrl: "https://demo.smarttrainerlms.com/uploads/0003/trainings/course/45/modules/fullstack-react-book-r30_1510302324482009603.pdf",
      image: react,
    },
  ]);

  // State for new book inputs
  const [newTitle, setNewTitle] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newFile, setNewFile] = useState(null);
  const [newImage, setNewImage] = useState(null);

  // Handle new book upload
  const handleUpload = () => {
    if (!newTitle || !newUser || !newFile || !newImage) {
      alert("Please enter all details and select both files.");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: newTitle,
      user: newUser,
      fileUrl: URL.createObjectURL(newFile), // Generates a temporary URL for the file
      image: URL.createObjectURL(newImage), // Generates a temporary URL for the image
    };

    setBooks([...books, newBook]);

    // Reset inputs after upload
    setNewTitle("");
    setNewUser("");
    setNewFile(null);
    setNewImage(null);
  };

  return (
    <>
      <h1 id="book">Book Sharing Platform 📚</h1>

      <div className="books-container">
        {/* Upload Section */}
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

          {/* Upload PDF */}
          <label>📄 Upload Book (PDF):</label>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={(e) => setNewFile(e.target.files[0])}
            style={{ color: "#AAA6D3" }}
          />

          {/* Upload Cover Image */}
          <label>🖼 Upload Cover Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />

          <button onClick={handleUpload} style={{ backgroundColor: "#655DBE" }}>
            Upload Book
          </button>
        </div>
      </div>

      {/* Book List Section */}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <div className="book-content">
              <img id="img" src={book.image} alt={book.title} />
              <h3 id="h3">{book.title}</h3>
              <p>Uploaded by: <strong>{book.user}</strong></p>
            </div>
            <a href={book.fileUrl} download className="download-btn">Download</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;
