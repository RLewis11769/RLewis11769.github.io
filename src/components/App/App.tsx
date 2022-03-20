import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

export default function App() {
  return (
    <div className="App">
      <main className="container">
        <NavBar />
        <HomePage />
        <div className="inside-container">
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
