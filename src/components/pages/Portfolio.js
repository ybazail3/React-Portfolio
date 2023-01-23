import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio(props) {
  return (
    <div className="img-box">
        <img className="portfolio-size" src={props.img} alt={props.alt} />
        <a href={props.url}>
            <div className="title-project">
                <h4>{props.title}</h4>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
        </a>
    </div>
  )
}