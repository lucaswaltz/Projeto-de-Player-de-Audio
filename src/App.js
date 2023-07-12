import './App.css';
import LogoImg from './assets/logo.svg'
import ProfileImg from './assets/profile.jpg'


function App() {
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

          <li className="music-one">

            <img src='https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg' />
            <strong>Violão Acust.</strong>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>

          </li>
          <li className="music-two">

            <img src='https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg' />
            <strong>Just Things</strong>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>

          </li>
          <li className="music-three">

            <img src='https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg' />
            <strong>Maybe Other</strong>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>

          </li>

          <li className="music-four">

            <img src='https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg' />
            <strong>It's simple</strong>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>

          </li>

        </ul>

      </main>

    </div >
  );
}

export default App;
