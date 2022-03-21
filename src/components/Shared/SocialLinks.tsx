import github from '../../assets/social/github.svg';
import linkedin from '../../assets/social/linkedin.svg';

export default function SocialLinks() {
  // Rendering of social links component
  // Used in navbar and footer components

  return (
    <ul className="center">
      <li>
        {/* Links open new tab */}
        <a href="https://github.com/RLewis11769" target="_blank" rel="noreferrer">
          <img src={github} alt="Github icon"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rachelarlewis/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn icon"/>
        </a>
      </li>
    </ul>
  );
}
