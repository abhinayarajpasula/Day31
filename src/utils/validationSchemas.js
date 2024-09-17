import * as Yup from 'yup';

export const bookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN number is required'),
  publicationDate: Yup.date().required('Publication date is required'),
});

export const authorSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth date is required'),
  biography: Yup.string().required('Biography is required'),
});