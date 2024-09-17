import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import '../App.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [highlightButton, setHighlightButton] = useState(false);

  const handleAddBook = (newBook, { resetForm }) => {
    setBooks([...books, newBook]); 
    resetForm(); 
    setHighlightButton(true);
  };

  const handleEditBook = (bookToEdit) => {
    setEditingBook(bookToEdit);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.isbn === updatedBook.isbn ? updatedBook : book)));
    setEditingBook(null);
  };

  const handleDeleteBook = (bookToDelete) => {
    setBooks(books.filter((book) => book.isbn !== bookToDelete.isbn));
  };

  return (
    <div>
      <h1>Manage Books</h1>
      <BookForm
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
        onSubmit={editingBook ? handleUpdateBook : handleAddBook}
        highlightButton={highlightButton}
      />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;