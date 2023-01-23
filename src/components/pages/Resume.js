import React from 'react';
import '../../styles/Resume.css';
import resume from '../../images/Resume.pdf';

export default function Resume() {

  return (
    <div className="resume-body">
      <h1>Resume</h1>
        <a href={resume} download>Download Resume Here
      </a>
        <ul className="ul-proficiencies">
        Proficiencies: 
            <li>CSS</li>
            <li>HTML</li>
            <li>NodeJS</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Express.js</li>
        </ul>
    </div>
  );
}
