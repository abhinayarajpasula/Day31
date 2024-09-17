import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bookSchema } from '../utils/validationSchemas';
import './BookForm.css'; 

const BookForm = ({ initialValues, onSubmit, highlightButton }) => {
  useEffect(() => {
    if (highlightButton) {
      const submitButton = document.getElementById('submit-button');
      submitButton.classList.add('highlight');
      setTimeout(() => {
        submitButton.classList.remove('highlight');
      }, 1000); // Remove highlight after 1 second
    }
  }, [highlightButton]);

  return (
    <div className="book-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={bookSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" id="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field type="text" name="author" id="author" />
              <ErrorMessage name="author" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="isbn">ISBN</label>
              <Field type="text" name="isbn" id="isbn" />
              <ErrorMessage name="isbn" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="publicationDate">Publication Date</label>
              <Field type="date" name="publicationDate" id="publicationDate" />
              <ErrorMessage name="publicationDate" component="div" className="error" />
            </div>
            <button id="submit-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;