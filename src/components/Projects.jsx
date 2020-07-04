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

      <div className='container-fluid'>
        <div className='row' id='projects-row'>
          <div className='col-md-4 col-sm-6'>
            <div className='card'>
              <h2 className='card-header'>React Quote Machine</h2>
              <div className='card-body'>
                <p>This is a simple React quote machine I created. I used Bootstrap 4, React router DOM, ESLint, and JQuery.
            It's asynchronous and uses React Hooks.</p>
                <Button target="_blank" href='https://reactquote-machine.herokuapp.com/' variant='outline-primary'>Check me out!</Button>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='card'>
              <h2 className='card-header'>Fullstack JavaScript app</h2>
              <div className='card-body'>
                <p>This is a full stack web project using HTML, CSS, JavaScript, nodeJs, ejs, mongoDB, and express.
                This project has a database, pings a api, and has a login feature.
            This project also uses asynchronous programming.</p>
                <Button target="_blank" href='https://github.com/bmansk8/pluralsight-project' variant='outline-primary'>Check me out!</Button>
              </div>
            </div></div>
          <div className='col-md-4 col-sm-6'>
            <div className='card'>
              <h2 className='card-header'>IZM Guitars</h2>
              <div className='card-body'>
                <p>This is a Guitar buying website I made. It uses a lot of
            pre built <a target='blank' href='https://react-bootstrap.github.io/'>React Bootstrap</a> components and
            Heavy use of imgs and img resizing. Staying responsive was very important.
            The website is a simple project for me but the guitars are real!</p>
                <Button target="_blank" href='https://master.d3l8o45biaqq60.amplifyapp.com/' variant='outline-primary'>Check me out!</Button>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  )
}