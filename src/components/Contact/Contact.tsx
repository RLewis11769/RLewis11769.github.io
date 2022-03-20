import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import { H2, Text } from '../Shared/StyledComponents';

export default function Contact() {
  const classes = useStyles();

  return (
    <section id="contact">
      <Typography variant="h1" className={classes.title}>Contact</Typography>
      <div className={classes.card}>
        <Text></Text>
        <H2>Email</H2>
        <Text>RLewis11769@gmail.com</Text>
        <H2>Phone</H2>
        <Text>(918) 346-1751</Text>
        <Text></Text>
      </div>
    </section>
  );
}
