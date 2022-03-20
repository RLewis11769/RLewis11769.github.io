import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import Project from './Project';
import projList from './projList';

export default function Projects() {
  const classes = useStyles();

  return (
    <section id='projects'>
      <Typography variant='h1' className={classes.title}>Highlighted Projects</Typography>
      <div className="cols">
        {projList.map((proj, idx) => (
          <Project key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
