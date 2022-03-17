import './HomePage.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pic from '../../assets/personal/temp.jpg';

const useStyles = makeStyles({
  name: {
    color: '#26A641',
    fontWeight: 'bold',
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <section id="homepage">
      <img src={pic} alt="Homepage pic" />
      <div className="name">
        <Typography variant="h1" className={classes.name}>Rachel</Typography>
        <Typography variant="h1" className={classes.name}>Lewis</Typography>
      </div>
    </section>
  );
}
// <Typography variant="h1" color="primary">Typography h1</Typography>
