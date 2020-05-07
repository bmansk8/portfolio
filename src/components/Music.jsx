import React from 'react';
import './Music.css'

export default function Music() {
  return (
    <div className='Music'>

      <div id='text' className='text-center'>
        <h1>Music</h1>
        <p>So you are interested in my music? Well you can listen to some of my tracks below!</p>
      </div>

      <div id='players'>
        <div className='row'>
          <div className='col'>
            <iframe title='MorningDew' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769598131&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col'>
            <iframe title='KeepHangingOn' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/710317231&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col'>
            <iframe title='ContrayMotionSynthRemix' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/676244819&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col'>
            <iframe title='ContraryMotion' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/676242815&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col'>
            <iframe title='82Strat' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/676240241&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col'>
            <iframe title='DarknessOf808' width="400px" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/659170865&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}