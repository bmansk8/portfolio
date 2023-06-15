export default function Creations() {
  return (
    <div className="creations">
      <h2>Creations</h2>
      <p>What would I be if I haven't built some cool stuff!</p>

      <div className="flex flex-col">
        <div className="mt-2 border-t-solid border-t-[1px] border-[var(--black)] w-[25%] min-w-[100px]"></div>
        <h3>KOA url shortner</h3>
        <a href="https://github.com/bmansk8/Koa-url-shortner">
          https://github.com/bmansk8/Koa-url-shortner
        </a>
        <p>
          For a quick rundown, this project uses Typescript and Koa.js. It also
          interacts with a Cosmos DB.
        </p>
        <h4>Tech Stack</h4>
        <p>
          This app is built using Koa.js, created by the same people who made
          Express. It is deployed in a Kubernetes cluster using Docker
          containers. The data and keys are stored in an Azure Cosmos SQL
          database. Testing is done using Jest. Nodemon is used as a middleware
          for automatically refreshing the code when changes are made. A make
          file is available for container setup. The config package is used to
          retrieve the database connection string from a JSON configuration
          file.
        </p>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex mt-2 border-t-solid border-t-[1px] border-[var(--black)] w-[50%] min-w-[100px] ml-auto"></div>
        <h3>Rock Paper Scissors</h3>
        <a href="https://github.com/bmansk8/rock-paper-scissors">
          https://github.com/bmansk8/rock-paper-scissors
        </a>
        <p>
          This is a simple python rock paper scissors game. This was a personal
          challenge to learn a new language. In the process, I utilized ChatGPT
          to assist with writing unit tests and refactoring the code.
        </p>
        <h4>Tech Stack</h4>
        <p>Pyton, chatGPT</p>
      </div>

      <div className="flex flex-col w-full items-end text-right">
        <div className="mr-auto flex mt-2 border-t-solid border-t-[1px] border-[var(--black)] w-[75%] min-w-[100px]"></div>
        <h3>River Rocks Worship</h3>
        <a href="https://github.com/bmansk8/river-rocks-worship">
          https://github.com/bmansk8/river-rocks-worship
        </a>
        <p>
          This project was something I worked on for fun and as a personal side
          project. I added some really cool photos and had a lot of fun
          experimenting with template literals to create the chord sheets. What
          made it even more exciting was incorporating some neat animations to
          bring the content on the page to life. It was actually my first time
          trying out animations in a project, so that added a challenge and
          helped me to grow my css skills.
        </p>
        <h4>Tech Stack</h4>
        <p>
          This uses Vite, Tailwind, Typescript, and of course, React and
          React-Router-Dom.
        </p>
      </div>
    </div>
  );
}
