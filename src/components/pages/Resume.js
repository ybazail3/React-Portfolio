import React from 'react';
import '../../styles/Resume.css';
import Container from 'react-bootstrap/Container';
import imgOne from '../../images/resume.png';
import url from '../../images/Resume.pdf'

export default function Resume() {

  return (
    <div>
      <Container>
      <h1>Resume</h1>
      <a className="img" href={url} download>
      <img src={imgOne}></img>
      </a>
        <p>
        Proficiencies: 
            - CSS
            - HTML
            - JavaScript
            - NodeJS
            - GitHub
            - MySQL
        </p>
        </Container>
    </div>
  );
}
