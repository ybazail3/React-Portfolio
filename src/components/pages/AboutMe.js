import React from 'react';
import '../../styles/About.css';
import me from '../../images/me.jpeg';
import work from '../../images/IMG_3819 2.jpeg';
import landscape from '../../images/IMG_1217.jpeg';

export default function About() {
  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
        <img className="aboutImg" src={me} alt="A picture of me" />
        <img className="aboutImg" src={work} alt="A picture of me at Work" />
        <img className="aboutImg" src={landscape} alt="A picture of mount rainier" />
        <p className="aboutme-text">
          Hello, my name is Yazmin and I currently work as a "Teller" for Kitsap Credit Union. My interest in Computer Science began while I was searching for a career path. I actually started by using the <a href="https://www.freecodecamp.org/">freecodecamp</a> learning through there certificate trainings. This was the first time I thought "Hey, I could see myself doing this!". After that I looked up colleges and bootcamps I could learn through. This is when I decided to enroll in the UW Bootcamp partnered with EdX. I enjoy listening to electronic dance music, spending time with friends and listening to podcasts.
        </p>
    </div>
  );
}
