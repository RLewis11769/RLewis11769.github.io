import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import Project from './Project';
import projList from './projList';

export default function Projects() {
  // Rendering of all projects in projects section
  // Passes props to each project in Project.tsx using data in projList.js

  // Make use of Material UI's styling classes
  const classes = useStyles();

  return (
    <section id='projects'>
      <Typography variant='h1' className={classes.title}>Highlighted Projects</Typography>
      <div className="cols">
        {/* For every value in projList, passes all data as props */}
        {projList.map((proj, idx) => (
          <Project key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
