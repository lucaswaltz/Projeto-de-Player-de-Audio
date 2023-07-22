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
  const [selectedMusic, setSelectedMusic] = useState()
  const [playing, setPlaying] = useState(false)



  function selectMusic(music) {
    const musicAudio = document.querySelector("audio")
    document.querySelector(".btn-pause").style.display = "flex"
    document.querySelector(".btn-play").style.display = "none"

    setMusicName(music.title)
    setArtistName(music.artist)
    setSelectedMusic(music.url)


    setTimeout(() => {
      setPlaying(true)
      musicAudio.play()

    }, 50);


  }

  function pauseMusic() {

    const musicAudio = document.querySelector("audio")
    document.querySelector(".btn-pause").style.display = "none"
    document.querySelector(".btn-play").style.display = "flex"

    setTimeout(() => {
      setPlaying(false)
      musicAudio.pause()

    }, 50);
  }

  function playMusic() {

    if (!selectedMusic) {
      return
    }

    else {
      document.querySelector(".btn-pause").style.display = "flex"
      document.querySelector(".btn-play").style.display = "none"

      const musicAudio = document.querySelector("audio")

      setTimeout(() => {
        setPlaying(true)
        musicAudio.play()

      }, 50);

    }



  }

  function stopMusic() {

    const musicAudio = document.querySelector("audio")
    document.querySelector(".btn-pause").style.display = "none"
    document.querySelector(".btn-play").style.display = "flex"


    setTimeout(() => {
      setPlaying(false)
      musicAudio.pause()
      musicAudio.currentTime = 0

    }, 50);


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
              <audio src={selectedMusic} />
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

          <img className='btn-stop' src={BtnStop} onClick={() => stopMusic()} />
          <img className='btn-previous' src={BtnPrevious} />
          <img className='btn-play' src={BtnPlay} onClick={() => playMusic()} />
          <img className='btn-pause' src={BtnPause} onClick={() => pauseMusic()} />
          <img className='btn-next' src={BtnNext} />
        </div>

      </footer>

    </div >
  );
}

export default App;
