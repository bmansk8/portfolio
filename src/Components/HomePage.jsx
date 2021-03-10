import React from "react";
import Photo from "../imgs/guitarPhoto.jpg";
import pluralsightLogo from "../imgs/psLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faMusic,
  faFileCode,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import "../css/HomePage.scss";

export default function HomePage() {
  return (
    <div id='HomePage'>
      <h1 id='name' className='text-center display-3'>
        Barron M V Brock
      </h1>

      <div className='row' id='lg_about'>
        <div className='col'>
          <img src={Photo} className='rounded float-right' alt='alt'></img>
        </div>
        <div className='col'>
          <p>
            I&apos;m a junior level full stack web developer. I&apos;m most
            comfortable in React and the AWS cloud. Learning new tools and
            languages from doc pages and online courses is one of my strengths.
            I recently have been working a lot with Next.js. I&apos;m laid back
            and easily self motivated. I’m a musician and that is my main
            creative outlet. Also writing, journaling, basketball, and running
            are some of my main hobbies. Coding is my passion and I can’t wait
            to land my first position.
          </p>
        </div>
      </div>

      <div className='row' id='sm_about'>
        <div className='col'>
          <img id='GtrPhoto' src={Photo} className='rounded' alt='alt'></img>
          <p>
            I&apos;m a junior level full stack web developer. I&apos;m most
            comfortable in React and the AWS cloud. Learning new tools and
            languages from doc pages and online courses is one of my strengths.
            I recently have been working a lot with Next.js. I&apos;m laid back
            and easily self motivated. I’m a musician and that is my main
            creative outlet. Also writing, journaling, basketball, and running
            are some of my main hobbies. Coding is my passion and I can’t wait
            to land my first position.
          </p>
        </div>
      </div>

      <h2>Education:</h2>
      <div className='row' id='education'>
        <div className='col'>
          <h3>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
            <a
              href='https://www.freecodecamp.org/'
              rel='noopener noreferrer'
              target='_blank'
            >
              FreeCodeCamp.org
            </a>{" "}
            Studies
          </h3>
          <p>2018 - 2019</p>
          <ul>
            <li>
              February 2018 started a full stack certification on
              freecodecamp.org.
            </li>
            <li>Completed the Responsive Web Design Projects certification.</li>
            <li>
              Completed JavaScript Algorithms and Data Structures Projects
              certification.
            </li>
          </ul>
        </div>
        <div className='col'>
          <h3>
            <img
              src={pluralsightLogo}
              alt='plural sight logo'
              className='rounded psLogo'
            />
            <a
              href='https://www.pluralsight.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              pluralsight.com
            </a>{" "}
            Studies
          </h3>
          <p>2019 - 2020</p>
          <ul>
            <li>
              Completed the Building web apps with nodeJs and Express class by
              Johnathan Mills on plural sight.
            </li>
            <li>
              Completed RESTfull web services with nodeJS and express by
              Johnathan Mills on plural sight.
            </li>
            <li>
              Finished a associate level AWS cloud class early in January 2020
              through plural sight.
            </li>
          </ul>
        </div>
        <div className='col'>
          <h3>G.E.D</h3>
          <p>
            The G.E.D covers mathematics, social studies, science, reading and
            writing. Equivalent to a high school diploma. I took my G.E.D a year
            early to focus on programmng. Graduated with high scores.
          </p>
        </div>
      </div>

      <h2>Certifications:</h2>
      <div className='row' id='certifications'>
        <div className='col'>
          <h3>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Javascript Algorithms and
            Data Structures
          </h3>
          <p>
            issued Apr 2019 -{" "}
            <a
              href='https://www.freecodecamp.org/certification/bmansk8/javascript-algorithms-and-data-structures'
              rel='noopener noreferrer'
              target='_blank'
            >
              Certification
            </a>
          </p>
          <p>
            I completed FCC&apos;s JavaScript Algorithms and Data Structures
            course.
          </p>
        </div>
        <div className='col'>
          <h3>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Responsive Web Design
          </h3>
          <p>
            issued Oct 2018 -{" "}
            <a
              href='https://www.freecodecamp.org/certification/bmansk8/responsive-web-design'
              target='_blank'
              rel='noopener noreferrer'
            >
              Certification
            </a>
          </p>
          <p>I completed FCC&apos;s responsive web design course.</p>
        </div>
        <div className='col'>
          <h3>
            <img
              src={pluralsightLogo}
              alt='plural sight logo'
              className='rounded psLogo'
            />
            JavaScript skill IQ : 156
          </h3>
          <a
            href='https://www.linkedin.com/feed/update/urn:li:activity:6640327468303568896/'
            rel='noopener noreferrer'
            target='_blank'
          >
            verify
          </a>
          <p>
            I took the skill assessment for JavaScript on{" "}
            <a
              href='https://www.pluralsight.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              pluralsight.com
            </a>{" "}
            and scored 156 out of 300 putting me in the 54th percentile.
          </p>

          <h3>
            <img
              src={pluralsightLogo}
              alt='plural sight logo'
              className='rounded psLogo'
            />
            HTML 5 skill IQ : 147
          </h3>
          <a
            href='https://www.linkedin.com/feed/update/urn:li:activity:6640327717306810368/'
            rel='noopener noreferrer'
            target='_blank'
          >
            verify
          </a>
          <p>
            I took the skill assessment fro HTML 5 on{" "}
            <a
              href='https://www.pluralsight.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              pluralsight.com
            </a>{" "}
            and scored 147 out of 300 putting me in the 48th percentile.
          </p>
        </div>
      </div>

      <h2>Creations:</h2>
      <div className='row' id='Code'>
        <div id='creations' className='col'>
          <h3>
            <FontAwesomeIcon icon={faFileCode} /> Code:
          </h3>
          <p>
            If you want to see some of my completed projects click Check them
            out below. You can also go to my{" "}
            <a href='https://github.com/bmansk8'>GitHub</a> to see all of my
            projects.
          </p>
        </div>

        <div className='col'>
          <div id='creationsNested'>
            <h3>
              <FontAwesomeIcon icon={faFileCode} /> Code:
            </h3>
            <p>
              If you want to see some of my completed projects click Check them
              out below. You can also go to my{" "}
              <a href='https://github.com/bmansk8'>GitHub</a> to see all of my
              projects.
            </p>
          </div>
          <div className='card'>
            <h3 className='card-header'>Fullstack JavaScript app</h3>
            <div className='card-body'>
              <p>
                This is a full stack web project using HTML, CSS, JavaScript,
                nodeJs, ejs, mongoDB, and express. This project has a database,
                pings a api, and has a login feature. This project also uses
                asynchronous programming.
              </p>
              <Button
                target='_blank'
                href='https://github.com/bmansk8/pluralsight-project'
                variant='outline-primary'
              >
                Check me out!
              </Button>
            </div>
          </div>

          <div className='card'>
            <h3 className='card-header'>React Quote Machine</h3>
            <div className='card-body'>
              <p>
                This is a simple React quote machine I created. I used Bootstrap
                4, React router DOM, ESLint, and JQuery. It&apos;s asynchronous
                and uses React Hooks.
              </p>
              <Button
                target='_blank'
                href='https://reactquote-machine.herokuapp.com/'
                variant='outline-primary'
              >
                Check me out!
              </Button>
            </div>
          </div>

          <div className='card'>
            <h3 className='card-header'>2FA</h3>
            <div className='card-body'>
              <p>
                This is a simple 2FA app I created from a YouTube tutorial using
                express, node-json-db, speakeasy and uuid.
              </p>
              <Button
                target='_blank'
                href='https://github.com/bmansk8/2FA'
                variant='outline-primary'
              >
                Check me out!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='row' id='Music'>
        <div className='col'>
          <h3>
            <FontAwesomeIcon icon={faMusic} /> Music:
          </h3>
          <p>
            I am also a musician. Click{" "}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://distrokid.com/hyperfollow/barronbrock/a-wild-goose-chase'
            >
              here
            </a>{" "}
            to check out my new E.P. Musicians also make great programmers{" "}
            <FontAwesomeIcon icon={faSmileWink} />. If you want to see more of
            my music, articles, or photos simply click{" "}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://barron-blog.vercel.app'
            >
              here
            </a>{" "}
            to go to my personal blog.
          </p>
        </div>
        <div className='col'>
          <iframe
            width='100%'
            height='450'
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1219231234&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
