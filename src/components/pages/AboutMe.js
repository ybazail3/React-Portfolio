import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/About.css';
import Container from 'react-bootstrap/Container';
import me from '../../images/me.jpeg';

export default function About() {
  return (
    <div className="background">
      <Container>
        <h1>About Me</h1>
        <Row>
          <Col sm={3}>
        <img className="aboutImg" src={me} />
        </Col>
        <Col sm={9}>
        <p>
          Hello, my name is Yazmin and I currently work as a "Teller" for Kitsap Credit Union. My interest in Computer Science began while I was searching for a career path. I actually started by using the <a href="https://www.freecodecamp.org/">freecodecamp</a> learning through there certificate trainings. This was the first time I thought "Hey, I could see myself doing this!". After that I looked up colleges and bootcamps I could learn through. This is when I decided to enroll in the UW Bootcamp partnered with EdX. I enjoy listening to electronic dance music, spending time with friends and listening to podcasts. I have a 2 year old boxer who is probably the sweetest dog we have ever had.
        </p>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
