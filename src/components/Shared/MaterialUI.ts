import { makeStyles } from '@material-ui/core/styles';

// Define styles for Material UI components
// This is probably not the way to use these, but I didn't know
const useStyles = makeStyles({
  // Name used on homepage banner for my name
  name: {
    color: 'var(--color-secondary)',
    fontWeight: 'bold',
    fontSize: '7.5rem',
  },
  // Title is for title at beginning of each section
  title: {
    color: 'var(--color-secondary)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5rem',
    marginTop: '5rem',
  },
  // Card is used in projects section and contact section
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3rem',
    margin: '0.5rem',
  },
  // Used in projects section
  cardHeader: {
    backgroundColor: 'var(--color-secondary)',
    width: '100%',
    textAlign: 'center',
    color: 'var(--color-primary)',
    fontWeight: 'bold',
    padding: '1rem',
  },
  customButton: {
    textShadow: '0px 0px 3px #26A641',
    boxShadow: '0px 0px 3px #26A641',
    border: '2px solid #26A641',
    cursor: 'pointer',
  },
});

export default useStyles;
