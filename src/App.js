import logo from './logo.svg';
import './App.css';
import SectionOne from './Component/SectionOne/SectionOne';
import SectionTwo from './Component/SectionTwo/SectionTwo';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
      {/* <AboutPage /> */}
      {/* <Footer /> */}
      <HomePage />
    </div>
  );
}

export default App;
