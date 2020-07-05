import React from 'react';
import './Home.css';
import Photo from '../imgs/guitarPhoto.jpg'
import pluralsightLogo from '../imgs/psLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faMusic,
  faFileCode,
  faSmileWink
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faReact
} from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className="App">
      <header>
        <a href='https://www.linkedin.com/in/barron-brock-482059174/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        <a href='https://github.com/bmansk8' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        <a href='https://codepen.io/bmansk14' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen} /> CodePen.io</a>
        <a href='https://www.freecodecamp.org/bmansk8' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFreeCodeCamp} /> FCC</a>
        <a href='https://reactquote-machine.herokuapp.com/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faReact} /> Quote Machine</a>
        <div><FontAwesomeIcon icon={faEnvelope} /> bmansk14@gmail.com</div>
        <div><FontAwesomeIcon icon={faPhone} /> 678-704-7626</div>
        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Dahlonega Ga</div>
      </header>

      <h1 id='name' className='text-center display-3'>Barron M V Brock</h1>

      <div className='row' id='lg_about'>
        <div className='col'>
          <img src={Photo} className='rounded float-right' alt='alt'></img>
        </div>
        <div className='col'>
          <p>
            I'm a junior level fullstack developer in search of my first position. I was home schooled and started programming in 8th grade.
            I had a tutor from Georgia tech for four years. I love coding so much I graduated high school a year early so I could focus on learning full-stack development.
            React! It's my preferred frame work. I'm also familiar with Redux, Angular, Alpine.js, express, and EJS.
            I'm currently taking classes on plural sight including learning how to host applications in the AWS cloud.
        </p>
        </div>
      </div>

      <div className='row' id='sm_about'>
        <div className='col'>
          <img id='GtrPhoto' src={Photo} className='rounded' alt='alt'></img>
          <p>
            I'm a junior level fullstack developer in search of my first position. I was home schooled and started programming in 8th grade.
            I had a tutor from Georgia tech for four years. I love coding so much I graduated high school a year early so I could focus on learning full-stack development.
            React! It's my preferred frame work. I'm also familiar with Redux, Angular, Alpine.js, express, and EJS.
            I'm currently taking classes on plural sight including learning how to host applications in the AWS cloud.
          </p>
        </div>
      </div>

      <div className='row' id='education'>
        <h2>Education:</h2>
        <div className='col'>
          <h3><FontAwesomeIcon icon={faFreeCodeCamp} /><a href='https://www.freecodecamp.org/' rel="noopener noreferrer" target="_blank"> FreeCodeCamp.org</a> Studies</h3>
          <p>2018 - 2019</p>
          <ul>
            <li>February 2018 started a full stack certification on freecodecamp.org.</li>
            <li>Completed the Responsive Web Design Projects certification.</li>
            <li>Completed JavaScript Algorithms and Data Structures Projects certification.</li>
          </ul>
        </div>
        <div className='col'>
          <h3><img src={pluralsightLogo} alt='plural sight logo' className='rounded psLogo' /><a href='https://www.pluralsight.com/' rel="noopener noreferrer" target="_blank">pluralsight.com</a> Studies</h3>
          <p>2019 - 2020</p>
          <ul>
            <li>Completed the Building web apps with nodeJs and Express class by Johnathan Mills on plural sight.</li>
            <li>Completed RESTfull web services with nodeJS and express by Johnathan Mills on plural sight.</li>
            <li>Finished a associate level AWS cloud class early in January 2020 through plural sight.</li>
            <li>Currently studying testing with jest, react, and AWS hosting on pluralsight.com</li>
          </ul>

        </div>
        <div className='col'>
          <h3>G.E.D</h3>
          <p>The G.E.D covers mathematics, social studies, science, reading and writing. Equivalent to a high school diploma.
             I took my G.E.D a year early to focus on programmng. Graduated with high scores.</p>

        </div>
      </div>

      <div className='row' id='certifications'>
        <h2>Certifications:</h2>
        <div className='col'>
          <h3><FontAwesomeIcon icon={faFreeCodeCamp} /> Javascript Algorithms and Data Structures</h3>
          <p>issued Apr 2019 - <a href='https://www.freecodecamp.org/certification/bmansk8/javascript-algorithms-and-data-structures' rel="noopener noreferrer" target="_blank">Certification</a></p>
          <p>I completed FCC's JavaScript Algorithms and Data Structures course.</p>
        </div>
        <div className='col'>
          <h3><FontAwesomeIcon icon={faFreeCodeCamp} /> Responsive Web Design</h3>
          <p>issued Oct 2018 - <a href='https://www.freecodecamp.org/certification/bmansk8/responsive-web-design' target='_blank' rel="noopener noreferrer">Certification</a></p>
          <p>I completed FCC's responsive web design course.</p>
        </div>
        <div className='col'>
          <h3><img src={pluralsightLogo} alt='plural sight logo' className='rounded psLogo' />JavaScript skill IQ : 156</h3>
          <a href='https://www.linkedin.com/feed/update/urn:li:activity:6640327468303568896/' rel="noopener noreferrer" target="_blank">verify</a>
          <p>I took the skill assessment for JavaScript on <a href='https://www.pluralsight.com/' rel="noopener noreferrer" target="_blank">pluralsight.com</a> and scored 156 out of 300 putting me in the 54th percentile.</p>

          <h3><img src={pluralsightLogo} alt='plural sight logo' className='rounded psLogo' />HTML 5 skill IQ : 147</h3>
          <a href='https://www.linkedin.com/feed/update/urn:li:activity:6640327717306810368/' rel="noopener noreferrer" target="_blank">verify</a>
          <p>I took the skill assessment fro HTML 5 on <a href='https://www.pluralsight.com/' rel="noopener noreferrer" target="_blank">pluralsight.com</a> and scored 147 out of 300 putting me in the 48th percentile.</p>
        </div>
      </div>

      <div className='row' id='moreLinks'>
        <h2>Creations:</h2>
        <div className='col'>
          <h3><FontAwesomeIcon icon={faMusic} /> Music:</h3>
          <p>I am also a musician. Click <a href='/music'>Here</a> To see some of my music.
          Musicians also make great programmers <FontAwesomeIcon icon={faSmileWink} /> </p>
        </div>
        <div className='col'>
          <h3><FontAwesomeIcon icon={faFileCode} /> Code:</h3>
          <p>If you want to see some of my completed projects click <a href='/code'>here</a> to see a list.
          You can also go to my <a href='https://github.com/bmansk8'>GitHub</a> to see all of my projects.
          </p>
        </div>
      </div>

      <footer className='text-center'>
        <p>Made by Barron V Brock with create react app, and boostrap 4</p>
      </footer>

    </div>
  );
}
