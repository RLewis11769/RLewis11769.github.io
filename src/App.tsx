import './App.css';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

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
        </div>
      </main>
      <Footer />
    </div>
  );
}
