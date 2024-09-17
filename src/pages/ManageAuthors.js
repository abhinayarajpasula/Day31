import React, { useState } from 'react';
import './ManageAuthors.css';

const ManageAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    birthDate: '',
    biography: '',
  });
  const [editingAuthorIndex, setEditingAuthorIndex] = useState(null); 

  // Handle input changes for form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
  };

  // Handle form submission (Add or Update author)
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingAuthorIndex !== null) {
      // If editing, update the author in the list
      const updatedAuthors = [...authors];
      updatedAuthors[editingAuthorIndex] = newAuthor;
      setAuthors(updatedAuthors);
      setEditingAuthorIndex(null); // Reset editing state
    } else {
      // If not editing, add a new author
      setAuthors([...authors, newAuthor]);
    }

    // Clear the form after adding or updating
    setNewAuthor({
      name: '',
      birthDate: '',
      biography: '',
    });
  };

  // Handle editing an author
  const handleEdit = (index) => {
    const authorToEdit = authors[index];
    setNewAuthor(authorToEdit); // Populate the form with the author's data
    setEditingAuthorIndex(index); // Set the index of the author being edited
  };

  // Handle deleting an author
  const handleDelete = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div className="author-container">
      <h1>Manage Authors</h1>

      {/* Form for adding or editing an author */}
      <form className="author-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newAuthor.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={newAuthor.birthDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="biography">Biography</label>
        <textarea
          id="biography"
          name="biography"
          value={newAuthor.biography}
          onChange={handleInputChange}
          rows="4"
          required
        />

        {/* Change button text based on whether editing or adding */}
        <button type="submit">{editingAuthorIndex !== null ? 'Update Author' : 'Add Author'}</button>
      </form>

      {/* Table for displaying authors */}
      {authors.length > 0 ? (
        <table className="author-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>{author.birthDate}</td>
                <td>{author.biography}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No authors available.</p>
      )}
    </div>
  );
};

export default ManageAuthors;