import { Typography } from '@material-ui/core';
import useStyles from '../Shared/MaterialUI';
import './HomePage.css';
import pic from '../../assets/personal/Banner.webp';

export default function HomePage() {
  // Rendering of banner at top of page loaded first

  // Make use of Material UI's styling classes
  const classes = useStyles();

  return (
    <section id="homepage">
        <img src={pic} alt="Homepage pic"/>
        <div className="name">
          <Typography className={classes.name}>Rachel</Typography>
          <Typography className={classes.name}>Lewis</Typography>
        </div>
        <p>Photography by <a href="https://github.com/breebrowder" target="_blank" rel="noreferrer">Bree Browder</a></p>
    </section>
  );
}
