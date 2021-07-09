import React from "react";
import Photo from "../imgs/coverArt25.jpg";
import "../css/HomePage.scss";

export default function Hero() {
  return (
    <div id='Hero'>
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


    </div>
  );
}


