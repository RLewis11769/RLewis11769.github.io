import './App.css';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <div className="App">
      <main>
        <HomePage />
        <NavBar />
        <About />
        <Projects />
      </main>
    </div>
  );
}
