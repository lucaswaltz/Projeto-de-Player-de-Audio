import './App.css';
import LogoImg from './assets/logo.svg'
import ProfileImg from './assets/profile.jpg'

function App() {
  return (
    <div className="container">

      <header>
        <img src={LogoImg} />

        <div className='profile'>
          <img src={ProfileImg} />
          <span>Bem vindo, Lucas.</span>
        </div>

      </header>

    </div >
  );
}

export default App;
