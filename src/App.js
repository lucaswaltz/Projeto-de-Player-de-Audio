import './App.css';
import LogoImg from './assets/logo.svg';
import ProfileImg from './assets/profile.jpg';
import BtnStop from './assets/stop.svg';
import BtnPrevious from './assets/previous.svg';
import BtnPlay from './assets/play.svg';
import BtnPause from './assets/pause.svg';
import BtnNext from './assets/next.svg';
import musics from './musics';
import { useState } from 'react';
import { useRef } from 'react';




function App() {


  const [musicName, setMusicName] = useState()
  const [artistName, setArtistName] = useState()

  function selectMusic(music) {

    setMusicName(music.title)
    setArtistName(music.artist)

  }

  return (
    <div className="container">

      <header>

        <img src={LogoImg} />
        <div className="profile">
          <img src={ProfileImg} />
          <span>Bem vindo, Lucas.</span>
        </div>

      </header>

      <main>

        <h1>The best play list</h1>

        <ul className="list-music">

          {musics.map((music) =>
            <li key={music.id} onClick={() => selectMusic(music)}>
              <img src={music.cover} />
              <strong>{music.title}</strong>
              <span>{music.description}</span>
              <audio src={music.url} />
            </li>
          )}

        </ul>

      </main>

      <footer>

        <div className='music-info'>

          <strong >

            {musicName}

          </strong>


          <span>

            {artistName}

          </span>

        </div>

        <div className='controls-buttons'>

          <img className='btn-stop' src={BtnStop} />
          <img className='btn-previous' src={BtnPrevious} />
          <img className='btn-pause' src={BtnPause} />
          <img className='btn-next' src={BtnNext} />
        </div>

      </footer>

    </div >
  );
}

export default App;
