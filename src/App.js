import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import './styles/responsive.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cloud from './components/Cloud';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Footer from './components/Footer';
// if you're using a bundler, first import:
import Headroom from "headroom.js";
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();


function App() {
  // let header = document.querySelector('header');
  //     let headroom= new Headroom(header);
  //   // let headroom= new Headroom(header,{tolerance:{down:5,up:25}});
  //   headroom.init();
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("nav-menu")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Cloud/>
      <Education/>
      <Certificates/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
