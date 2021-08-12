import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          Machi Koro
        </NavLink>
        <NavLink to='/newCard' className='d-flex btn btn-outline-success'>
          New Card
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
