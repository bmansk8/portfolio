import React from "react";
import "../css/Blog.scss";

export default function Blog() {
  return (
    <div id='Blog'>
      <div id='artical-1'>
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
    </div>
  );
}
