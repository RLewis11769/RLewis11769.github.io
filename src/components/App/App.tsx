import { Suspense, lazy } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';

// Asynchronous loading of components
// Only components "above the fold" are loaded/rendered immediately
const About = lazy(() => import('../About/About'));
const Contact = lazy(() => import('../Contact/Contact'));
const Footer = lazy(() => import('../Footer/Footer'));
const Projects = lazy(() => import('../Projects/Projects'));
const Resume = lazy(() => import('../Resume/Resume'));

export default function App() {
  // Rendering of entire page

  return (
    <div className="App">
      <main className="container">
        {/* Anything outside of suspense loads first */}
        <NavBar />
        <HomePage />
        {/* Suspense only loads when others loaded first - has fallback until then */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="margin_lr">
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
