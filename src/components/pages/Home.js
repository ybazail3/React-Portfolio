import React from 'react';
import '../../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../portfolioData';

function Portfolio(props) {
  return (
    <div className="project-container">
        <img className="portfolio-size" src={props.img} alt={props.alt} />
        <a href={props.url}>
            <div className="title-project">
                <h4>{props.title}</h4>
                <a href={props.gitHub} className="github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            </div>
        </a>
    </div>
  )
}

export default function Home() {
  return (
  <div className="page">
    <h1>
      Projects
    </h1>
    <div className="projects-cards">
      {projects.map((project) => {
        return (<Portfolio {...project} />)
      })}
    </div>
  </div>
  )
}