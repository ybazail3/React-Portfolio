import React from 'react';
import '../../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import imgOne from '../../images/firstportfolio.png';

export default function Home() {
  return (
    <div className="background">
      <h1>Portfolio</h1>
      <Container>
      <Row>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>First Portfolio</h3>
      <a href="https://ybazail3.github.io/my-portfolio/">
        <img className="img" src={imgOne} />
        </a>
        <a href="https://github.com/ybazail3/my-portfolio">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>MySql Employee Tracker</h3>
      <a href="">
        <img className="img" src="./public/assets/firstportfolio.png"></img>
        </a>
        <a href="https://github.com/ybazail3/Employee-TrackerSQL">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>README Generator</h3>
      <a href="https://ybazail3.github.io/my-portfolio/">
        <img className="img" src="./public/assets/firstportfolio.png"></img>
        </a>
        <a href="https://github.com/ybazail3/README-Generator"> 
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>Text Editor</h3>
      <a href="https://ybazail3.github.io/my-portfolio/">
        <img className="img" src="./public/assets/firstportfolio.png"></img>
        </a>
        <a href="https://github.com/ybazail3/PWA-TextEditor"> 
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>Data Deposits</h3>
      <a href="https://fierce-badlands-78414.herokuapp.com/">
        <img className="img" src="./public/assets/firstportfolio.png"></img>
        </a>
        <a href="https://github.com/ybazail3/my-portfolio"> 
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        <Col xs={6}>
      <div className='portfolio-container'>
      <h3>Drinking Around</h3>
      <a href="https://ybazail3.github.io/Drinking-around/">
        <img className="img" src="./public/assets/firstportfolio.png"></img>
        </a>
        <a href="https://github.com/ybazail3/Drinking-around">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        </div>
        </Col>
        </Row>
        </Container>
      
    </div>
  );
}
