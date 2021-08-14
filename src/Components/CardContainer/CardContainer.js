import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
const CardContainer = () => {
  const [establishments, setEstablishments] = useState(null);
  const [selectedEstablishment, setSelectedEstablishment] = useState('All');
  useEffect(() => {
    fetch('http://localhost:4000/establishments')
      .then((res) => res.json())
      .then(setEstablishments);
  }, []);
  const displayCards = () => {
    const filteredEstablishments = establishments.filter((est) => {
      if (selectedEstablishment === 'All') return true;
      return est.name === selectedEstablishment;
    });

    return filteredEstablishments.map((est) =>
      est.cards.map((card, idx) => (
        <Card
          key={`${idx}-${card.name}`}
          est={est.name}
          card={card}
          deleteCard={deleteCard}
        />
      ))
    );
  };
  const establishmentOptions = () => {
    return establishments.map((est) => (
      <option key={est.id} value={est.name}>
        {est.name}
      </option>
    ));
  };
  const handleFilterSelect = (e) => {
    setSelectedEstablishment(e.target.value);
  };
  const deleteCard = (id) => {
    fetch(`http://localhost:4000/cards/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const updatedEstablishment = establishments.map((est) => {
          return {
            ...est,
            cards: est.cards.filter((card) => {
              return card.id !== id;
            }),
          };
        });
        setEstablishments(updatedEstablishment);
      });
  };
  return (
    <div className='container'>
      <select
        className='form-select my-5 mx-auto w-50'
        aria-label='Default select example'
        onChange={handleFilterSelect}
      >
        <option defaultValue>All</option>
        {establishments && establishmentOptions()}
      </select>
      <div className='row g-0'>{establishments && displayCards()}</div>
    </div>
  );
};

export default CardContainer;
