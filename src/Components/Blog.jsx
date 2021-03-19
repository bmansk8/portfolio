import { Button } from "react-bootstrap";
import React from "react";
import "../css/Blog.scss";
import pic1 from "../imgs/Array.jpg";
import pic2 from "../imgs/Array2.jpg";
import pic3 from "../imgs/Array3.jpg";

export default function Blog() {
  return (
    <div id='Blog'>
      {/* 
    <pre><code></code></pre> are the way to go for sure.
    */}

      <div id='article 5'>
        <h1>Revisiting Next.js</h1>
        <p>
          So I know in my last article I said I would not continue to use
          Next.js for any of my projects. I didn’t lie but maybe wasn’t totally
          honest either. So my personal blog site is built with Next.js. This
          has led me to continue to use it. Now I have not used it for any new
          projects but I have become a lot more familiar with it. Some stuff
          that really has nothing to do with Next and some stuff that does
          involve Next. So with that let&apos;s get started.
        </p>

        <p>
          First off I added a navbar to my site. This is pretty easy if you
          don’t have anything persistent on the navbar. Simply make a react
          component with your nav bar in it and then in your _app.js file wrap
          your default component with the navbar component. And make sure to
          have your component and papgeprops in your function. Your navbar also
          needs to import children and display them. Boom now you have a navbar
          that persists on every page. Next also makes SEO easy. Simply import
          the head element from next and stick that in your _app.js file. All in
          all should look something like this.
        </p>

        <pre className='code'>
          <code>
            {`navbar

import { Children } from "react";

export default function Layout({children}) {
  return (
    <>
      <nav className={styles.navbar}>
      </nav>
      {children}
    </>
  );
}
`}
          </code>
        </pre>

        <pre className='code'>
          <code>
            {`_app.js

import Layout from "../public/utilities/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Barron Brock's Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
        `}
          </code>
        </pre>

        <p>
          Some helpful links about SEO and a favicon generator{" "}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://blog.logrocket.com/how-next-js-can-help-improve-seo/'
          >
            Article 1,{" "}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://ahrefs.com/blog/seo-meta-tags/'
          >
            {" "}
            Article 2,{" "}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://favicon.io/'
          >
            {" "}
            favicon genreator
          </a>
        </p>

        <p>
          One other cool thing I did was added a ruote to look through any
          archived files I have on the site. Old articles not on the home page
          and stuff like that. I am yet to add a search function but that will
          come at some point. What I wanted to do was go look through my file
          tree, find all the names, get rid of the .jsx and then display them in
          li tags. I was doing this manually but why not make the computer do
          it?
        </p>
        <p>
          First things first import fs from node. Then create a get static props
          function, Then I set up my array of folders to look through and a
          array for the clean names
        </p>

        <pre className='code'>
          <code>
            {`import fs from "fs";

export async function getStaticProps(){
  const directories = ["/articles","/photos","/songs"];
  const cleanNames = [];
}
`}
          </code>
        </pre>

        <p>
          Then I ran a for each of the directories and removed the .jsx tag for
          each filename. Push each one to the cleannames arr and then return it
        </p>

        <pre className='code'>
          <code>
            {`directories.forEach((i) => {
  let temp = fs.readdirSync("./pages/posts" + i).map((i) => {
    i = i.replace(regex, "");
    return i;
  });
  cleanNames.push(temp);
});

return { props: { cleanNames } };
`}
          </code>
        </pre>

        <p>The regex is /\.jsx$/ btw</p>

        <p>
          It&apos;s important you do this in get static props as only the server
          side can use Node’s file system. Then in my return of my function I
          pass in cleanames and render them out. Cleannames gives me an array of
          arrays. Index one is all the filenames for articles 2 is photos and 3
          is songs ect… so I map each index of the array like so
        </p>

        <pre className='code'>
          <code>
{`export default function archived({ cleanNames }) {
  return (
    <div className="archived">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>Archived posts</h1>
      <p>A list of all my posts on the site so far.</p>
      <ul>
        <h3>Articles</h3>
        {cleanNames[0].map((name, i) => {
          return <A_li route={"/posts/articles/"} name={name} key={i} />;
        })}
        <h3>Photos</h3>
        {cleanNames[1].map((name, i) => {
          return <A_li route={"/posts/photos/"} name={name} key={i} />;
        })}
        <h3>Songs</h3>
        {cleanNames[2].map((name, i) => {
          return <A_li route={"/posts/songs/"} name={name} key={i} />;
        })}
      </ul>
      <a href="/">Home Page</a>
    </div>
  );
}
`}
          </code>
        </pre>

        <p>
          A_li is just a custom component I made for the li tags. It look like
          this
        </p>

        <pre className='code'>
          <code>
            {`export default function A_li(props) {
  return (
    <li>
      <a href={props.route + props.name}>{props.name} </a>
    </li>
  );
}          
`}
          </code>
        </pre>

        <p>
          So all in all my archive file looks like{" "}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/bmansk8/barron-blog/blob/main/pages/archives.jsx'
          >
            this
          </a>
          .
        </p>
        <p>
          So while I still think I prefer client side rendering Next.js has
          really grown on me and I will keep using it for my personal blog site.
          If you want to see my blog site simply go to{" "}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://barron-blog.vercel.app'
          >
            barron-blog.vercel.app
          </a>
          !
        </p>
      </div>

      <div id='article 4'>
        <h1>Next.js</h1>
        <p>
          &quot;Next.js gives you the best developer experience with all the
          features you need for production: hybrid static & server rendering,
          TypeScript support, smart bundling, route prefetching, and more. No
          config needed.&quot; to quote their home page.
        </p>

        <p>
          So why did I decide to use Next.js? Honestly, I was intrigued with
          static site generation and the file tree style routing Next offered.
          I’m a huge create-react-app fanboy and I love react-router so this was
          something all new to me. Now all I needed was a project to build. What
          is the most common starter project you might ask? Well a blog site of
          course. There are tons of tutorials for this and it’s also Next.js’
          way of teaching you the ropes on their doc page. So that’s what I did.
        </p>

        <p>
          To bootstrap your project simply run{" "}
          <span className='npm'>{`npx create-next-app`}</span> And then your
          Next.js app is up and running with thte needed dependencies.
        </p>

        <p>
          Now there are a lot of tutorials about making a blog site with
          Next.js. Nested routes, using .md files, or even using typescript but
          as someone who just did the tutorial on the docs page I kept my site
          simple. No dynamic routes, really no routes at all, and I am not using
          .md files. I simply wanted photos, text, and iframes from soundcloud
          so I could share my music. I won’t share everything I did but here are
          some small things I encountered.
        </p>

        <p>
          So one amazing thing is routes are based off of your file structure.{" "}
          <span className='nestedCode'>/pages/posts/article.jsx</span> is a
          valid route in Next.js. This in turn makes life very easy in terms of
          writing out all your routes. The [] braces are used for dynamic routes
          if you want to add them. So I had my pages and posts set up. In the{" "}
          <span className='nestedCode'>/public/css</span> I had my css and
          folder called utilities with my scss variables. Simply run{" "}
          <span className='npm'>npm install sass </span>
          for sass support.
        </p>

        <p>
          One weird quirk I&apos;m not used to is including all the css files in
          the main <span className='nestedCode'> _app.js</span> file. The list
          of imports on a large project would be huge and forgetting to add a
          css file to the list would happen once or twice I’m sure. To add
          another weird quirk is how Next handles fonts. Now I might be missing
          something here but adding fonts is very tricky. If you want to use a
          font, I used one from google, you add the link tag to every file that
          is using that font. Simply set that font as the default in the global
          css file. Obviously though writing the same code more than once is bad
          practice but I couldn’t find a lot about this online. So yes each file
          includes a link tag pointing to the font.
        </p>

        <p>
          Next.js also made a img component they strongly suggest using but
          personally I’m not a fan. I found styling myself instead of fighting
          with the default styles worked out far better for me. Also having to
          set the width and height in the component was not something I liked.
          My project is small enough whatever benefits when it comes to load
          times just are not worth it to me.
        </p>

        <p>
          I also was going to add a light/dark mode but since things are
          statically generated that is not possible with my level of
          understanding. I suppose in theory you could build the site, then
          check what style the user prefers and resend the project with those
          styles but that seems like it would have a lot of reloading involved.
          So the level of interactibilty that comes from client side rendering
          was something I missed.
        </p>

        <p>
          So to end this post, yes Next.js is cool, but for me and future
          projects I am planning on returning to create-react-app and client
          side rendering. Oddly enough my scss skills improved more than
          anything on this project. I will say hosting on vercel is an amazing
          way to host a Next.js app and really competes with aws on that front.
          But for me there is just not enough there to really commit to
          switching to Next.js. I can see the appeal but it’s just not for me.
        </p>

        <p>
          If you want to see the blog I built go{" "}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://barron-blog.vercel.app/'
          >
            here
          </a>
          , or see the github repo{" "}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/bmansk8/barron-blog'
          >
            here
          </a>
          . Happy coding!
        </p>

        <div>
          <p>
            Want to go{" "}
            <Button href='/' variant='outline-secondary'>
              Back &lt;--
            </Button>{" "}
            ?
          </p>
        </div>
      </div>

      <div id='article 3'>
        <h1>Array manipulation</h1>
        <p>
          So I recently had a skill assessment for a job. There was a html
          section but the JS side is more interesting to me as that&apos;s
          something I tend to neglect. Yes I use React, Express, React Router,
          and all the other frameworks/tools on the JS side. But I find myself
          being more and more frontend focused every day. So high time I
          sharpened my JS skills!
        </p>

        <p>
          So first off, the array I&apos;m manipulating. So this was for a Job
          so i won’t go into details since that would give the answers away but
          these are pretty general tasks. First off, make an array and make sure
          it’s constant. Do something like this.
        </p>

        <img src={pic1} alt='array' />

        <p>
          So I threw this in a <span className='nestedCode'>.json</span> file.
          You can just import it into your JS file. Note everything being
          strings is important. My challenge did not use numbers but that just
          helps make it easier.{" "}
        </p>

        <p>
          So my first task was to get all the objects from group one. So I
          should return 3 objects. Now i tried doing it with a for loop{" "}
        </p>

        <p className='code'>{`for (let i=0; i < arr.length: i++){
          /*go through array and get what i need.*/
        }`}</p>

        <p>
          But there is a better way!{" "}
          <span className='nestedCode'>.filter()</span> oh my gosh YES!{" "}
          <span className='nestedCode'>.filter()</span> makes life so easy and
          allows for less code than a for loop. Since our objects are in an
          array we can use this feature.{" "}
        </p>

        <p className='code'>{`
         return arr.filter( (e) =>{ return e.group == '1'})
        `}</p>

        <p>
          Boom! Job done! Now there are two more to go. Next is storing the objs
          by group. Basically all group 1 objs in a obj and all group 2 objs in
          an object. Like this
        </p>

        <img src={pic2} alt='Array 2' />

        <p>Last but not least all group 1 objs that have more than 1 alias.</p>

        <img src={pic3} alt='Array 3' />

        <p>
          We filter all the group 1 objs so we are just working with those. Then
          using destructuring we grab the alias property and match it to a regex
          for a comma. Note the{" "}
          <span className='nestedCode'>String(alias)</span> we have to specify
          we are checking string or <span className='nestedCode'>.match()</span>{" "}
          won’t be a function. If you made your array like I did then a comma
          separates all the values. In the coding interview I did, it used first
          and last names, so I couldn&apos;t just check for spaces.
        </p>

        <p>
          So all in all, <span className='nestedCode'>.filter()</span> is a
          super useful method we can call that really cuts down on the amount of
          code we write. Thanks <span className='nestedCode'>.filter()</span>!
        </p>

        <div>
          <p>
            Want to go{" "}
            <Button href='/' variant='outline-secondary'>
              Back &lt;--
            </Button>{" "}
            ?
          </p>
        </div>
      </div>

      {/* next article */}

      <div id='article-2'>
        <h1>Less css!</h1>
        <p>
          So I said in my last article that I wanted to use less but only sass
          was supported by create-react app by default. So I took it upon myself
          to learn Less no matter what. In comes vanilla html using express to
          handle my routes and serve up the files. Now, you can use a link tag
          in your header but I wanted to install less via npm. Simply type
        </p>

        <p>
          <span className='npm'>npm install less</span> or{" "}
          <span className='npm'>npm install less -g</span>
        </p>

        <p>-g for global install. I chose the local option.</p>

        <p>
          So, Less has some really cool options and adds a lot to css. Now this
          used to be cool but, variables are available in less. Yes i’m aware
          css has these also but that used to not be the norm until around 2017
          from my research. Also, from what I found online, preprocessor
          variables have some limitations
        </p>

        <ol type='I'>
          <li>you cannot change them dynamically.</li>
          <li>they are not aware of the DOM’s structure.</li>
          <li>they cannot be read or changed from JavaScript.</li>
        </ol>

        <p>So how do less vars work? Like this,</p>

        <p className='code'> @primary: red; </p>

        <p>Then in a selector you go</p>

        <p className='code'> p &#123;color: @primary;&#125; </p>

        <p>Another cool feature is mixins. Less mixins work like this</p>

        <p className='code'>.img&#123; width:300px; height:300px; &#125;</p>

        <p>Then we can use those styles in another selector.</p>

        <p className='code'>p&#123; .img(); &#125;</p>

        <p>
          And the main reason I got into a css preprocessor was nesting
          selectors
        </p>

        <p className='code'> div &#123; p &#123; color:blue; &#125; &#125;</p>

        <p>
          I talk about this in the first blog post. Simply scroll down to see
          more about that.
        </p>

        <p>
          So, those are just a few cool things in less. There are a lot more so
          here is a list of some I used in my less learning playground{" "}
        </p>

        <ol type='I'>
          <li>Custom selectors</li>
          <li>
            Maps <i>(Go to the less website. These are super awesome)</i>
          </li>
          <li>Css guards</li>
        </ol>

        <p>
          And even more on the less docs page! Here are some links to check out
          on your journey to becoming a less master.{" "}
        </p>

        <ul>
          <li>
            <a href='http://lesscss.org/'>Less website</a>
          </li>
          <li>
            <a href='https://gist.github.com/bmansk8/e092ede9395fc421d59311bc96507415'>
              My gist for Less
            </a>{" "}
            (just css)
          </li>
          <li>
            <a href='https://github.com/bmansk8/learning-Less'>My Less repo.</a>{" "}
            Feel free to clone
          </li>
          <li>
            A great{" "}
            <a href='https://www.youtube.com/watch?v=lJclQekSfSM'>video</a> on
            using pre processors
          </li>
        </ul>

        <div>
          <p>
            Want to go{" "}
            <Button href='/' variant='outline-secondary'>
              Back &lt;--
            </Button>{" "}
            ?
          </p>
        </div>
      </div>

      {/* next article */}

      <div id='article-1'>
        <h1>Building this site!</h1>

        <p>
          So someone told me to blog out my ideas when it comes to programming
          so here I am. I suppose I should start with the thought process of
          this site. I obviously wanted a portfolio site. Who doesn&apos;t? I
          originally started with a multi page site but ran into css applying to
          all the components and that messed up my styles. So i switched to
          single page to relieve that issue till I could solve it. I then got a
          great suggestion to add a light/dark mode. Lucky for me super easy to
          do.
        </p>

        <p className='code'>@media (prefers-color-scheme: light){}</p>

        <p>This simple query checks for the users system preference. Bam!</p>

        <p>I still needed to solve my css issue though...</p>

        <p>
          So first idea that came to me <i>(sadly like weeks later)</i> was to
          just nest my css in a selector that only affected each component like:
        </p>

        <p className='code'>#HomePage&#123;styles in here..&#125;</p>

        <p>
          Now sadly this is not possible in vanilla css, <b>BUT</b> it is with
          Less or SCSS. Now I have never used those before and looking briefly
          Less looked a little better to me. Now I used create react app for
          this project, <i>as most do</i>, so I couldn&apos;t use Less without
          ejecting or jumping through hoops. SCSS it is I guess
        </p>

        <p>
          Simply running <span className='npm'>npm install node-sass</span> is
          all I needed for sass support.
        </p>

        <p>
          So now I can simply nest my styles in a id selector and don&apos;t
          have to worry about styles running into other components that don’t
          need them
        </p>

        <p className='code'>
          {" "}
          #HomePage &#123; p &#123; color:blue; &#125; &#125;
        </p>

        <p>
          Now yes, I could have chained selectors like{" "}
          <span className='nestedCode'>#HomePage P &#123;&#125;</span> But
          nesting them looked better visually and made the migration quicker. It
          also was maybe the slight nudge I needed to get me interested in a css
          pre processor.
        </p>
      </div>

      <div>
        <p>
          Want to go{" "}
          <Button href='/' variant='outline-secondary'>
            Back &lt;--
          </Button>{" "}
          ?
        </p>
      </div>
    </div>
  );
}
