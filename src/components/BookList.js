import React, { useState } from 'react';
import './BookList.css'; 

const BookList = ({ books, onEdit, onDelete, onAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook(newBook);
    setNewBook({
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    });
  };

  return (
    <div>
      <h2>Book List</h2>
      
      {/* Form for adding a new book */}
      <form className="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={newBook.isbn}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="publicationDate">Publication Date</label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          value={newBook.publicationDate}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Add Book</button>
      </form>

      {/* Table for displaying books */}
      {books.length > 0 ? (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <button onClick={() => onEdit(book)}>Edit</button>
                  <button onClick={() => onDelete(book)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;