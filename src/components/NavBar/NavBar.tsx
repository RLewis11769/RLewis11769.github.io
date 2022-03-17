import './NavBar.css';
// import { Link } from "react-router-dom";

const NavBar = function NavBar() {
  return (
    <section className="NavBar">
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
