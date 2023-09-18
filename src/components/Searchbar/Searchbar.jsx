import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
// import { object, string } from 'yup';
import { Header } from './Searchbar.styled';

// const schema = object().shape({
//   searchQuery: string().required('Required field!'),
// });

export const Searchbar = ({ onFormSubmit }) => (
  <Header>
    <Formik
      initialValues={{ query: '' }}
      // validationSchema={schema}
      onSubmit={(values, actions) => {
        onFormSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <button type="submit">
          <span></span>
        </button>

        <Field
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {/* <ErrorMessage name="query" component="p" /> */}
      </Form>
    </Formik>
  </Header>
);

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
