import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authorSchema } from '../utils/validationSchemas';

const AuthorForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={authorSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label>Biography</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </Form>
    )}
  </Formik>
);

export default AuthorForm;