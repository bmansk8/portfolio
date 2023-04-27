import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Creations() {
  return (
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
              Developed a react quote machine that has a navbar, api calls, and
              protected routes. It uses async await, api calls, and react hooks.
              Utilized: react, react router, heroku, and bootstrap
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
            <br />
            <a href="https://github.com/bmansk8/barron-blog">
              See it on Github
            </a>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
