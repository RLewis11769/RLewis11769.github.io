import { Button } from '@material-ui/core';
import { ButtonLink } from '../Shared/StyledComponents';
import useStyles from '../Shared/MaterialUI';
import resume from '../../assets/personal/LewisRachel_Resume.pdf';

export default function PDF() {
  const classes = useStyles();

  return (
    <div className="center padding-x">
      <Button className={classes.customButton}>
        <ButtonLink href={resume} target="_blank" rel="noreferrer">
          View Resume
        </ButtonLink>
      </Button>
      <Button className={classes.customButton}>
        <ButtonLink href={resume} download={resume} target="_blank" rel="noreferrer">
          Download Resume PDF
        </ButtonLink>
      </Button>
    </div>
  );
}
