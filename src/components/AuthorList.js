import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Author List</h2>
      {authors.length > 0 ? (
        <table>
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
                  <button onClick={() => onEdit(author)}>Edit</button>
                  <button onClick={() => onDelete(author)}>Delete</button>
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

export default AuthorList;