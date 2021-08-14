import React, { useState, useEffect } from 'react';

const NewCardForm = () => {
  const initalFormData = {
    name: '',
    design_img: '',
    build_cost: 0,
    establishment_id: 5,
    description: '',
  };
  const [formData, setformData] = useState(initalFormData);
  const [establishments, setEstablishments] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/establishments')
      .then((res) => res.json())
      .then(setEstablishments);
  }, []);
  const establishmentOptions = () => {
    return establishments.map((est) => (
      <option key={est.id} value={est.id}>
        {est.name}
      </option>
    ));
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let key = e.target.name;
    if (key === 'establishment_id') {
      value = parseInt(value, 10);
    }
    if (key === 'build_cost' && value < 0) {
      value = 0;
    }
    if (key === 'build_cost') {
      value = parseInt(value, 10);
    }
    setformData({
      ...formData,
      [key]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('http://127.0.0.1:4000/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setformData(initalFormData);
      });
  };
  return (
    <div className='container'>
      <div className='row'>
        <img src='' alt='' className='col' />
        <form className='col' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='nameInput' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='nameInput'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='imageUrlInput' className='form-label'>
              Image
            </label>
            <input
              type='text'
              className='form-control'
              id='imageUrlInput'
              name='design_img'
              value={formData.design_img}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='costInput' className='form-label'>
              Building Cost
            </label>
            <input
              type='number'
              className='form-control'
              id='costInput'
              name='build_cost'
              value={formData.build_cost}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='establishmentInput' className='form-label'>
              Establishment Type
            </label>
            <select
              className='form-select'
              name='establishment_id'
              id='establishmentInput'
              onChange={handleChange}
            >
              {establishments && establishmentOptions()}
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='descriptionInput' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='descriptionInput'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCardForm;
