import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import pluralsightLogo from "../imgs/psLogo.jpg";

export default function Certifications() {
  return (
    <div>
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
    </div>
  );
}
