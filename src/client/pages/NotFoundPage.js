import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className='center-align' style={{ marginTop: '200px' }}>
      <h1>PAGE NOT FOUND</h1>
      <p>Opps! This page doesn't exist</p>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
