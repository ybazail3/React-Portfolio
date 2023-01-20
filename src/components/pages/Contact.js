import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Contact(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: input,
      email: input,
      comment: input,
    });

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Container>
        <form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <input
              type="text"
              placeholder="Enter Name"
              value={input}
              name="text"
              className="contact-input"
              onChange={handleChange}
            ></input>
          </Row>
          <Row>
            <input
              type="text"
              placeholder="Enter Email"
              value={input}
              name="text"
              className="contact-input"
              onChange={handleChange}
            ></input>
          </Row>
          <Row>
            <input
              type="text"
              placeholder="Enter Comments"
              value={input}
              name="text"
              className="contact-input"
              onChange={handleChange}
            ></input>
          </Row>
          <Row>
            <button className="contact-button">Connect!</button>
          </Row>
        </form>
      </Container>
    </div>
  );
}