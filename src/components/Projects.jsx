import React from 'react';
import './projects.css'
import { Button } from 'react-bootstrap'

export default function Projects() {
  return (
    <div id='Projects'>
      <div id='project-txt' className='text-center'>
        <h1>Projects</h1>
        <p>So you are interested in  some of my projects. Simply click any of the cards below to see one.
        If you're interested in what this site was made with:
        </p>
        <li>React</li>
        <li>Boostrap 4</li>
        <li>React Router Dom</li>
        <li>Font Awesome</li>
        <li>ESLint</li>
        <p>Want to see all of my projects? Go to my <a rel="noopener noreferrer" href='https://github.com/bmansk8' target='_blank'>GitHub</a>.</p>
      </div>

      <div className='row' id='projects-row'>
        <div className='col-4'>
          <div className='card'>
            <h2 className='card-header'>React Quote Machine</h2>
            <div className='card-body'>
              <p>This is a simple React quote machine I created. I used Bootstrap 4, React router DOM, ESLint, Jest, Enzyme, and JQuery.
              It's asynchronous and uses React Hooks.</p>
              <Button target="_blank" href='https://reactquote-machine.herokuapp.com/' variant='outline-primary'>Check me out!</Button>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <h2 className='card-header'>Fullstack JavaScript app</h2>
            <div className='card-body'>
              <p>This is a full stack web project using HTML, CSS, JavaScript, nodeJs, ejs, mongoDB, and express.
              This project has a database, pings a api, and has a login feature. 
              This project also uses asynchronous programming.</p>
              <Button target="_blank" href='https://github.com/bmansk8/pluralsight-project' variant='outline-primary'>Check me out!</Button>
            </div>
          </div></div>
        <div className='col-4'>
          <div className='card'>
            <h2 className='card-header'>Bootstrap Doc Page</h2>
            <div className='card-body'>
              <p>This is a documentation page I created for bootstrap. This was part of my
              <a rel="noopener noreferrer" target='_blank' href='https://www.freecodecamp.org/'> FreeCodeCamp.org</a> studies.</p>
              <Button target="_blank" href='https://codepen.io/bmansk14/full/aaejZE' variant='outline-primary'>Check me out!</Button>
            </div>
          </div></div>
      </div>
    </div>
  )
}