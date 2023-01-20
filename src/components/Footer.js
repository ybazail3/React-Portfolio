import React from 'react';
import '../styles/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/ybazail3">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/yazmin-bazail-247b14217/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a href="https://stackoverflow.com/users/21040987/ybcodes">
                    <FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon>
                </a>
            </div>
        </footer>
    )
}