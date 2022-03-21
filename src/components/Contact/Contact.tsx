import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import { H2, Text } from '../Shared/StyledComponents';

export default function Contact() {
  // Rendering of contact section

  // Make use of Material UI's styling classes
  const classes = useStyles();

  return (
    <section id="contact" className="color-text">
      <Typography variant="h1" className={classes.title}>Contact</Typography>
      <div className={classes.card}>
        {/* Empty texts are just there to add spacing */}
        <Text></Text>
        <H2>Email</H2>
        <Text>RLewis11769@gmail.com</Text>
        <H2>Phone</H2>
        <Text>(918) 346-1751</Text>
        <Text className="padding_tb"></Text>
      </div>
    </section>
  );
}
