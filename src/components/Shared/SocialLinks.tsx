import github from '../../assets/social/github.svg';
import linkedin from '../../assets/social/linkedin.svg';

export default function SocialLinks() {
  return (
    <ul className="social">
      <li>
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
