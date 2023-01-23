import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio(props) {
  return (
    <container className="project-container">
        <img className="portfolio-size" src={props.img} alt={props.alt} />
        <a href={props.url}>
            <div className="title-project">
                <h4>{props.title}</h4>
                <a href={props.gitHub} className="github">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            </div>
        </a>
    </container>
  )
}