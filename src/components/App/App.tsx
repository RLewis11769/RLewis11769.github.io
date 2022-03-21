import { Suspense, lazy } from 'react';
import './App.css';
// import About from '../About/About';
// import Contact from '../Contact/Contact';
// import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
// import Projects from '../Projects/Projects';
// import Resume from '../Resume/Resume';

const About = lazy(() => import('../About/About'));
const Contact = lazy(() => import('../Contact/Contact'));
const Footer = lazy(() => import('../Footer/Footer'));
// const NavBar = lazy(() => import('../NavBar/NavBar'));
const Projects = lazy(() => import('../Projects/Projects'));
const Resume = lazy(() => import('../Resume/Resume'));

export default function App() {
  return (
    <div className="App">
      <main className="container">
        <NavBar />
        <HomePage />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="inside-container">
            <About />
            <Projects />
            <Resume />
            <Contact />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
