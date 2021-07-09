import React from "react";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export default function Creations() {
  return (
    <div>
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
            <h3 className='card-header'>Personal Blog Site</h3>
            <div className='card-body'>
              <p>
                This is a personal blog site I created using only Next.js and
                SASS. It displays articles, photos, and my music. It boasts
                strong SEO, optimization, and shows my knowledge of Next.js and
                my ability to teach myself a new framework.
              </p>
              <Button
                target='_blank'
                href='https://barron-blog.vercel.app/'
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
    </div>
  );
}
