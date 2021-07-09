import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import pluralsightLogo from "../imgs/psLogo.jpg";

export default function Education() {
  return (
    <div>
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
    </div>
  );
}
