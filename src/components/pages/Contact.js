import React, { useState } from 'react';
import { valEmail } from '../utils/validateEmail';
import '../../styles/Contact.css';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else if (inputType === 'Comments') {
      setComments(inputValue);
    }
  };

  const handleerr = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if ((inputType === 'Name' || inputType === 'Comments') && inputValue.length < 1) {
      setError(`${inputType} is required`);
      return;
    } else if (inputType === 'Email' && !valEmail(inputValue)) {
      setError('Enter valid email')
      return;
    } else {
      setError('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !comments) {
      setError('Please fill out all sections')
      return;
    } else if (!valEmail(email)) {
      setError('Enter valid email')
      return;
    } else {
      setError("Thank you for your connection!")
      setName('');
      setEmail('');
      setComments('');
    }
  };

  return (
    <div>
      <h1>Let's Connect!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="Enter Name"
          value={name}
          name="Name"
          className="form-input"
          onChange={handleInputChange}
          onBlur={handleerr}
        ></input>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          name="Email"
          className="form-input"
          onChange={handleInputChange}
          onBlur={handleerr}
        ></input>
        <input
          type="comments"
          placeholder="Enter Comments"
          value={comments}
          name="Comments"
          className="form-input-comments"
          onChange={handleInputChange}
          onBlur={handleerr}
        ></input>

        {error && (
          <div>
            <p>
              {error}
            </p>
          </div>
        )}

        <button className="form-button">Connect!</button>
      </form>
    </div>
  );
}