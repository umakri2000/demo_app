// src/components/Form.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetForm } from '../src/slice';

const Form = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.form);   // form is the name declare din the slice.js
  console.log('name....',name);
  console.log('email...',email)

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', { name, email });
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Form;
