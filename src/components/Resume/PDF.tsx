import { ButtonLink } from '../Shared/StyledComponents';
import useStyles from '../Shared/MaterialUI';
import resume from '../../assets/personal/LewisRachel_Resume.pdf';
import { Text } from '../Shared/StyledComponents';

export default function PDF() {
  // Rendering of PDF component within resume section

  // Make use of Material UI's styling classes
  const classes = useStyles();

  return (
    <div className="center flex_col">
      {/* Just two buttons to view and download */}
      <ButtonLink className={classes.customButton} href={resume} target="_blank" rel="noreferrer">
        <Text>View Resume</Text>
      </ButtonLink>
      {/* Text adds space between - thought this would be an accessibility issue? */}
      <Text></Text>
      <ButtonLink className={classes.customButton} href={resume} download={resume} target="_blank" rel="noreferrer">
        <Text>Download Resume PDF</Text>
      </ButtonLink>
    </div>
  );
}
