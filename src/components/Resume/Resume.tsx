import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import PDF from './PDF';

export default function Resume() {
  const classes = useStyles();

  return (
    <section id="resume">
      <Typography variant="h1" className={classes.title}>Resume</Typography>
      <PDF />
    </section>
  );
}
