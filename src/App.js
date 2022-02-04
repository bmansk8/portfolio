import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/barron-v-brock/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/bmansk8">Github</a>
          </li>
          <li>
            <a href="https://barron-blog.vercel.app/">Creative Blog</a>
          </li>
          <li>678-704-7626</li>
          <li>bmansk14@gmail.com</li>
          <li>Dahlonega Ga</li>
        </ul>
      </div>

      <div className="header-card">
        <img
          src="https://barron-blog-photo.s3.amazonaws.com/EP/coverArt25.jpg"
          alt="Barron"
        />
        <h1>Barron M V Brock</h1>
        <p>
          I'm a junior level full stack web developer. I'm most comfortable in
          React and the AWS cloud. I recently have been working a lot with
          Next.js. Currently I have been using the rainfocus platform for event
          focused development. I'm laid back and easily self motivated. I’m a
          musician and that is my main creative outlet. Also writing,
          journaling, basketball, and running are some of my main hobbies.
        </p>
      </div>

      <div className="experince">
        <h2>Experience</h2>
        <p>
          I have over 3 years of experience doing web development whether in the
          professional space or the hobby space.
        </p>

        <h3>Griffin solutions</h3>
        <p>
          I create software! Whether it’s web based with html, css, js, react
          and more. Or .NET or node.js solutions. I’m always learning and using
          a variety of technologies including creating a proprietary front end
          framework to inject code into pre-existing online event technologies.
        </p>
      </div>

      <div className="creations">
        <h2>Creations</h2>
        <p>Some of the stuff I have built.</p>

        <Splide
          options={{
            rewind: true,
            perPage: 1,
            width: "100%",
            autoplay: true,
            pauseOnHover: true,
            padding: "10%",
            gap: "1rem",
          }}
        >
          <SplideSlide>
            <div className="card">
              <h3>Quote Machine</h3>
              <p>
                Developed a react quote machine that has a navbar, api calls,
                and protected routes. It uses async await, api calls, and react
                hooks. Utilized: react, react router, heroku, and bootstrap
              </p>
              <a href="https://github.com/bmansk8/testing-with-jest">
                See it in Github
              </a>
              <br />
              <a href="https://reactquote-machine.herokuapp.com/">
                See it in action
              </a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <h3>Two factor auth</h3>
              <p>
                This is a simple 2FA app I created from a YouTube tutorial using
                express, node-json-db, speakeasy and uuid.
              </p>
              <a href="https://github.com/bmansk8/2FA">See it on Github</a>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <h3>My Blog</h3>
              <p>
                This is a simple blog site where I display some of my side
                hobbies. You can find my music, photos, and some articles I have
                written. It is also a exercise to learn Next.js and static site
                generation.
              </p>
              <a href="https://barron-blog.vercel.app/">See it online!</a>
              <br />
              <a href="https://github.com/bmansk8/barron-blog">
                See it on Github
              </a>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <div className="education">
        <h2>Education</h2>
        <p>
          I graduated highschool a year early to study web development. All of
          these websites are great resources. They are my primary form of
          education for web development.
        </p>

        <ol>
          <li>
            FreeCodeCamp 2018-2019 <a href="https://www.freecodecamp.org/"></a>
            <ol type="A">
              <li>
                -Completed the Responsive Web Design Projects certification.
                (300 class hours)
              </li>
              <li>
                -Completed JavaScript Algorithms and Data Structures Projects
                certification. (300 class hours)
              </li>
            </ol>
          </li>
          <li>
            Pluralsight 2019-2020 <a href="http://www.pluralsight.com/"></a>
            <ol type="A">
              <li>
                -Completed the Building web apps with nodeJs and Express class
                by Johnathan Mills on plural sight.
              </li>
              <li>
                -Completed RESTfull web services with nodeJS and express by
                Johnathan Mills on plural sight.
              </li>
              <li>
                -Completed a associate level AWS cloud class through plural
                sight.
              </li>
            </ol>
          </li>
          <li>And of coruse MDN and YouTube</li>
        </ol>
      </div>

      <div className="music">
        <h2>My Music</h2>
        <p>
          I'm also a musician. I play a variety of genres but Alternative is my
          main one. I'm a multi instrumentalist playing bass, drums, vocals, and
          my best being guitar. I'm always working on something so feel free to
          give me a listen and follow!
        </p>

        <iframe
          title="spotify embed"
          src="https://open.spotify.com/embed/album/7HJtDGITmP4eTsr6eUKizD?utm_source=generator"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      <footer>
        <p>
          Created by Barron M V Brock using create react app and aws amplify
        </p>
      </footer>
    </div>
  );
}

export default App;
