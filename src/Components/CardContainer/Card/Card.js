import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = ({
  est,
  card: { id, design_img, name, build_cost, description },
  deleteCard,
}) => {
  const handleDelete = () => {
    deleteCard(id);
  };
  return (
    <div className='card border-dark mb-3 col-12' style={{ width: '18rem' }}>
      <div className='card-header'>{est}</div>
      <img
        src={design_img}
        className='card-img-top'
        alt={`${name} - Card Design`}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{description}</p>
        <p>Build Cost: {build_cost}</p>
        <NavLink to={`/cards/${id}`} className='btn btn-primary'>
          Edit Card
        </NavLink>
        <button type='submit' className='btn btn-danger' onClick={handleDelete}>
          Delete Card
        </button>
      </div>
    </div>
  );
};

export default Card;
