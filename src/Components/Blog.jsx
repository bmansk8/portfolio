import { Button } from "react-bootstrap";
import React from "react";
import "../css/Blog.scss";

export default function Blog() {
  return (
    <div id='Blog'>
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

        <code> @primary: red; </code>

        <p>Then in a selector you go</p>

        <code> p &#123;color: @primary;&#125; </code>

        <p>Another cool feature is mixins. Less mixins work like this</p>

        <code>.img&#123; width:300px; height:300px; &#125;</code>

        <p>Then we can use those styles in another selector.</p>

        <code>p&#123; .img(); &#125;</code>

        <p>
          And the main reason I got into a css preprocessor was nesting selectors
        </p>

        <code> div &#123; p &#123; color:blue; &#125; &#125;</code>

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

        <p>And even more on the less docs page! Here are some links to check out on your journey to becoming a less master. </p>

        <ul>
          <li><a href='http://lesscss.org/'>Less website</a></li>
          <li><a href='https://gist.github.com/bmansk8/e092ede9395fc421d59311bc96507415'>My gist for Less</a> (just css)</li>
          <li><a href='https://github.com/bmansk8/learning-Less'>My Less repo.</a>  Feel free to clone</li>
          <li>A great <a href='https://www.youtube.com/watch?v=lJclQekSfSM'>video</a> on using pre processors</li>
        </ul>
        

      </div>

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

        <code>@media (prefers-color-scheme: light){}</code>

        <p>This simple query checks for the users system preference. Bam!</p>

        <p>I still needed to solve my css issue though...</p>

        <p>
          So first idea that came to me <i>(sadly like weeks later)</i> was to
          just nest my css in a selector that only affected each component like:
        </p>

        <code>#HomePage&#123;styles in here..&#125;</code>

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

        <code> #HomePage &#123; p &#123; color:blue; &#125; &#125;</code>

        <p>
          Now yes, I could have chained selectors like{" "}
          <span className='code'>#HomePage P &#123;&#125;</span> But nesting
          them looked better visually and made the migration quicker. It also
          was maybe the slight nudge I needed to get me interested in a css pre
          processor.
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
