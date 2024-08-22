
import './App.css';
import AboutUs from './components/about/AboutUs';
import Banners from './components/banner/Banners';
import Contact from './components/contact/Contact';
import Nav from './components/Nav';
import Partners from './components/partners/Partners';
import Portfolio from './components/port/Portfolio';
import StudentInstructor from './components/stundentInstructor/StudentInstructor';
import Courses from './courses/Courses';

function App() {
  return (
    <>
      <Nav />
      <Banners/>
      <Courses />
      <AboutUs />
      <Portfolio />
      <Partners />
      <StudentInstructor />
    <Contact />
     
    </>
  );
}

export default App;
