export default function Music() {
  return (
    <div className="music">
      <h2>My Music</h2>
      <div className="musicSection1">
        <h3>My Solo Stuff</h3>
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

      <div class="musicSection2">
        <h3>Worship Music</h3>
        <p>
          I also am a part of the worship team for{" "}
          <a href="https://riverrockschurch.com/">River Rocks Church</a>. Along
          with my wife, and everyone in the worship band, we create music that
          allows people to have a real encounter with God. This is a passion of
          mine, and I'm always eager to create more music that both honors the
          Lord, and creates a enviroment for people to ecnounter God.
        </p>

        <iframe
          src="https://open.spotify.com/embed/artist/20Iwd9omhOUAYfRckrZv3U?utm_source=generator&theme=0"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
