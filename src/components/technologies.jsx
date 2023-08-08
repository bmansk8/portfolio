export default function Technologies() {
  return (
    <div className="technologies">
      <h1>My Tech Stack</h1>
      <p>
        So to be honest, I use a bunch of different tools. React and Node being
        my favorite. But if you want a complete list (although it is always
        growing) take a glance below.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:basis-1/2">
          <h2>Proficient:</h2>
          <ul>
            <li>React, React Router</li>
            <li>TypeScript</li>
            <li>Tailwind CSS, SCSS, SASS, CSS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Pymongo</li>
            <li>Python, Flask</li>
            <li>Web Components</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>RainFocus</li>
          </ul>
        </div>
        <div className="flex flex-col md:basis-1/2 items-end">
          <h2>Familiar:</h2>
          <ul className="md:max-w-[75%] text-right grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <li>Transformers</li>
              <li>Material-UI (MUI)</li>
              <li>jQuery</li>
              <li>Next.js</li>
              <li>Nest.js</li>
              <li>Koa.js</li>
              <li>Redux</li>
              <li>Angular</li>
            </div>
            <div className="flex flex-col">
              <li>Alpine.js</li>
              <li>EJS</li>
              <li>Halfmoon</li>
              <li>Svelte, Svelte Kit</li>
              <li>Vue</li>
              <li>Cypress</li>
              <li>Three.js</li>
              <li>Babylon.js</li>
              <li>.NET, C#</li>
            </div>

            <div className="flex flex-col">
              <li>
                AWS Lambda, AWS Event Bridge, AWS S3, AWS SQS, AWS WAF, AWS
                CloudFront
              </li>
              <li>
                Azure Functions, Azure Cognitive Search, Azure Cosmos DB, K8s
                Azure, Azure OpenAi
              </li>
            </div>

            <div className="flex flex-col">
              <li>Jest</li>
              <li>UUID</li>
              <li>Vercel</li>
              <li>Atlassian Forge</li>
              <li>Cannon.js</li>
              <li>Salesforce Experience Builder</li>
              <li>MySQL</li>
              <li>GraphQL</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
