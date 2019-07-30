import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => {
  return (
    <section className='error-page'>
      <div className='error-message-container'>
        <p className='error-message'>{message}</p>
      </div>
    </section>
  )
};

ErrorPage.propTypes = {
  message: PropTypes.string
};

export default ErrorPage;