import React from 'react';

const Navigation = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand'>Machi Koro</a>
        <button className='d-flex btn btn-outline-success' type='submit'>
          New Card
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
