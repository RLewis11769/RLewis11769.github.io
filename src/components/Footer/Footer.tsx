import { Text } from '../Shared/StyledComponents';
import { Typography } from '@material-ui/core';
import SocialLinks from '../Shared/SocialLinks';

export default function Footer() {
  // Rendering of footer section - including social links

  return (
    <footer className="color-text">
      {/* Looks like h2 but rendered on page as h1 for accessibility */}
      <Typography variant='h2' component="h1">Rachel Lewis</Typography>
      <Text>Student @ Holberton Tulsa</Text>
      <Text>Graduate 6/22/22</Text>
      <SocialLinks />
    </footer>
  );
}
