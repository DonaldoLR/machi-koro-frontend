import React from 'react';

const PageNotFound = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <img
          src='https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
          alt='Worried Kitten'
          className='col col-sm-12 col-lg-6'
        />
        <div className='col col-sm-12 col-lg-6'>
          <h1>404</h1>
          <h3 className='mt-5'>
            Oh No! I've hit an error in my program. I could not find what you
            wanted, but the least I can do is provide this kitten image.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
