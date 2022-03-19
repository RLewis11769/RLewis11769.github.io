import styled from 'styled-components';

const MenuButton = styled('button')<{ clicked: boolean }>`
  background-color: var(--color-primary);
  border: none;
  height: 3.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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
  }
`;

const NavbarContainer = styled.div`
  background-color: var(--color-primary);
  width: 5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 3rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  border-radius: 0 3rem 3rem 0;
`;

const MenuItems = styled('ul')<{ clicked: boolean }>`
  color: var(--text-primary);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary);
  padding: 2rem 0;
  position: absolute;
  top: 5rem;
  left: 0;
  width: ${(props) => (props.clicked ? '17.5rem' : '3.5rem')};
  transition: all 0.5s ease;
  border-radius: 0 3rem 3rem 0;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: var(--text-secondary);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 0.5rem solid var(--color-secondary);
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
    }
  }
  svg {
    width: 2.5rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
    brightness(78%) contrast(85%);
  }
`;

const Text = styled('span')<{ clicked: boolean }>`
  width: ${(props) => (props.clicked ? '100%' : '0')};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? '2.5rem' : '0')};
  transition: all 0.3s ease;
`;

export { MenuButton, NavbarContainer, MenuItems, MenuItem, Text };
