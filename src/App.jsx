import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './Components/HomePage';
import Blog from './Components/Blog';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faNewspaper,
  faCaretSquareUp
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faFreeCodeCamp
} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function Home() {
  return (

    <Router className='App'>

    <header>
        <a href='https://www.linkedin.com/in/barron-v-brock/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        <a href='https://github.com/bmansk8' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        <a href='https://codepen.io/bmansk14' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faCodepen} /> CodePen.io</a>
        <a href='https://www.freecodecamp.org/bmansk8' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFreeCodeCamp} /> FCC</a>
        <a href='https://vercel.com/bmansk8' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faCaretSquareUp} /> Vercel</a>
        <a href='/blog'><FontAwesomeIcon icon={faNewspaper} /> Coding Blog</a>
        <a href='https://barron-blog.vercel.app/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faNewspaper}/> Creative Blog</a>
        <div><FontAwesomeIcon icon={faEnvelope} /> bmansk14@gmail.com</div>
        <div><FontAwesomeIcon icon={faPhone} /> 678-704-7626</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Atlanta Ga</div>   
    </header>

      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>

      <footer className='text-center'>
        <p>Made by Barron V Brock with create react app, and boostrap 4.</p>
        <p>Prefer dark or light mode? Change your systems settings and the site will also change.</p>
      </footer>

    </Router>
      
  );
}
