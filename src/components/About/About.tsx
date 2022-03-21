import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import './About.css';
import Bio from './Bio';

export default function About() {
  // Rendering of about section

  // Make use of Material UI's styling classes - includes "Bio" component
  const classes = useStyles();

  return (
    <section id="about">
      <Typography variant="h1" className={classes.title}>About</Typography>
      <div className="quote_div">
        <blockquote>
          If I were given one hour to save the planet, I would spend 59 minutes defining the problem and one minute resolving it.
        </blockquote>
        <cite>Albert Einstein</cite>
      </div>
      <Bio />
      <div className="stats_div">
        <img src="https://github-readme-stats.vercel.app/api?username=RLewis11769&theme=github_dark&title_color=26A641&text_color=8b949E&hide=stars" alt="Github stats"></img>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RLewis11769&theme=github_dark&title_color=26A641&text_color=8b949E&langs_count=8&exclude_repo=holbertonschool-web_front_end,holberton-headphones,holberton-smiling-school&layout=compact" alt="Github top languages stats"></img>
      </div>
    </section>
  );
}
