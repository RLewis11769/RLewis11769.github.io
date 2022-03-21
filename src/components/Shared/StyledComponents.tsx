import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

// Defining custom tags based off of html tags (can't be Material UI tags?)

/*** NAVBAR ***/
const MenuButton = styled('button')<{ clicked: boolean, alt: string }>`
  background-color: var(--color-primary);
  border: none;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 5rem;
  &::before,
  &::after {
    content: "";
    background-color: var(--text-primary);
    height: 5px;
    width: 2rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? '1.5' : '2.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '1.5' : '2.rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  },
`;

const NavbarContainer = styled.div`
  background-color: var(--color-primary);
  width: 5rem;
  height: 75vh;
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  border-radius: 0 3rem 3rem 0;
`;

const MenuItems = styled('ul')<{ clicked: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  padding: 2rem 0.5rem;
  position: absolute;
  top: 8rem;
  left: 0;
  align-items: ${(props) => (props.clicked ? 'flex-between' : 'center')};
  margin-left: ${(props) => (props.clicked ? '0.5rem' : '0rem')};
  width: ${(props) => (props.clicked ? '15rem' : '5rem')};
  transition: all 0.5s ease;
  border-radius: 0 3rem 3rem 0;
`;

const MenuItem = styled('a')<{ exact?: boolean, activeClassName: string, href: string, alt: string }>`
  text-decoration: none;
  color: var(--text-secondary);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  svg {
    width: 3rem;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
    brightness(78%) contrast(85%);
  }
  &:hover {
    border-right: 0.5rem solid var(--color-secondary);
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
    }
  },
`;

const MenuText = styled('span')<{ clicked: boolean }>`
  width: ${(props) => (props.clicked ? '100%' : '0')};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? '2.5rem' : '0')};
  transition: all 0.3s ease;
`;

/*** BUTTONS ***/
const ButtonLink = styled('a')({
  textDecoration: 'none',
  padding: '1rem',
  '&:hover': {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-primary)',
    borderRadius: '0.5rem',
  },
  '&:focus': {
    color: 'var(--color-primary)',
    backgroundColor: 'var(--color-secondary)',
    borderRadius: '0.5rem',
    outline: 'none',
  },
});

/*** CARD ***/
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

/*** OTHER ***/
const H1 = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

const H2 = styled('h2')({
  fontSize: '2rem',
  marginBottom: '1rem',
});

const Text = styled('p')({
  fontSize: '1.5rem',
  margin: '1rem',
  textAlign: 'center',
});

export { MenuButton, NavbarContainer, MenuItems, MenuItem, MenuText, ExpandMore, H1, H2, Text, ButtonLink };
