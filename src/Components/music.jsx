import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSmileWink } from "@fortawesome/free-solid-svg-icons";

export default function Music() {
  return (
    <div>
      <div className='row' id='Music'>
        <div className='col'>
          <h3>
            <FontAwesomeIcon icon={faMusic} /> Music:
          </h3>
          <p>
            I am also a musician. You can check out{" "}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://distrokid.com/hyperfollow/barronbrock/a-wild-goose-chase'
            >
              my latest E.P
            </a>{" "}
            . You can find me on{" "}
            <a href='https://open.spotify.com/artist/1AfWH8mVhG62WMXLcxuUIH'>
              Spotify
            </a>
            ,{" "}
            <a href='https://music.apple.com/us/artist/barron-brock/1555957187'>
              Apple music
            </a>
            ,{" "}
            <a href='https://music.amazon.com/artists/B08XPSGR84/barron-brock'>
              Amazon Music
            </a>
            , <a href='https://soundcloud.com/bmansk14-brock'>Soundcloud</a> or
            my{" "}
            <a href='https://distrokid.com/hyperfollow/barronbrock/sojourner'>
              Hyperfollow
            </a>{" "}
            for my latest E.P. Musicians also make great programmers{" "}
            <FontAwesomeIcon icon={faSmileWink} />. If you want to see more of
            my music, articles, or photos simply go to{" "}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://barron-blog.vercel.app'
            >
              my personal blog
            </a>{" "}
          </p>
        </div>
        <div className='col'>
          <iframe
            src='https://open.spotify.com/embed/album/62dqxjfMhWCHHPMcxt1EpF'
            width='400px'
            height='300'
            frameBorder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/*
spotify https://open.spotify.com/artist/1AfWH8mVhG62WMXLcxuUIH
apple https://music.apple.com/us/artist/barron-brock/1555957187
amazon https://music.amazon.com/artists/B08XPSGR84/barron-brock
soundcloud https://soundcloud.com/bmansk14-brock
hyper follow latest E.P https://distrokid.com/hyperfollow/barronbrock/sojourner
*/
