import './HomePage.css';
import { Typography } from '@material-ui/core';
import pic from '../../assets/personal/Banner.jpg';
import useStyles from '../Shared/MaterialUI';

export default function HomePage() {
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
