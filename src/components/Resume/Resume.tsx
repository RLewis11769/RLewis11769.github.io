import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';

export default function Resume() {
  const classes = useStyles();

  return (
    <section>
      <Typography variant="h1" className={classes.title}>Resume</Typography>
    </section>
  );
}
