import React from 'react';
import Portfolio from './Portfolio.js';
import '../../styles/Home.css';
import { projects } from '../utils/portfolioData.js';

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