import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  name: {
    color: 'var(--color-secondary)',
    fontWeight: 'bold',
    fontSize: '7.5rem',
  },
  title: {
    color: 'var(--color-secondary)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5rem',
    marginTop: '7.5rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-primary)',
    border: '3px solid "var(--text-primary)"',
    borderRadius: '2rem',
    margin: '0.5rem',
  },
  cardHeader: {
    backgroundColor: 'var(--color-secondary)',
    width: '100%',
    textAlign: 'center',
    color: 'var(--color-primary)',
    fontWeight: 'bold',
    padding: '1rem',
  },
  customButton: {
    backgroundColor: 'transparent',
    color: 'var(--color-secondary)',
    textShadow: '0px 0px 3px "var(--color-secondary)"',
    boxShadow: '0px 0px 3px "var(--color-secondary)"',
    border: '2px solid "var(--color-secondary)"',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '1rem',
    '&:hover': {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-primary)',
    },
  },
});

export default useStyles;
