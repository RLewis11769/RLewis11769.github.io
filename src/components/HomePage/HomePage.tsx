import './HomePage.css';
import { Typography } from '@material-ui/core';
import pic from '../../assets/personal/Banner.jpg';
import useStyles from '../../materialUI/MaterialUI';

export default function HomePage() {
  const classes = useStyles();

  return (
    <section id="homepage">
        <img src={pic} alt="Homepage pic"/>
        <div className="name">
          <Typography variant="h1" className={classes.name}>Rachel</Typography>
          <Typography variant="h1" className={classes.name}>Lewis</Typography>
        </div>
    </section>
  );
}
