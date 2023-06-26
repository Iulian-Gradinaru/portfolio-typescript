import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { CustomNavLinkProps } from './NavBar.types';

export const Container = styled('nav')(() => ({
  backgroundColor: '#F1C376',
  height: '8vh',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 10,
  fontSize: 23,
  gap: 20,
  color: '#606C5D',
  margin: '-7px',
}));

export const ContainerParagraph = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    cursor: 'pointer',
    margin: 0,
  };
});

export const Paragraph = styled('p')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: 0,
  paddingLeft: 22,
  letterSpacing: '0.1rem',
}));

export const ContainerLinks = styled('div')(() => {
  return {
    paddingRight: 36,
    display: 'flex',
    gap: 20,
  };
});

export const CustomNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== 'isActive',
})<CustomNavLinkProps>(({ isActive }) => ({
  textDecoration: 'none',
  border: '4px solid transparent',
  display: 'inline-block',
  verticalAlign: 'top',
  textAlign: 'center',
  fontSize: 30,
  position: 'relative',
  color: '#606C5D',
  '&::after': {
    width: '0%',
    height: 4,
    display: 'block',
    backgroundColor: 'white',
    content: '""',
    position: 'absolute',
    top: 34,
    left: '50%',
    transition:
      'left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '&:hover::after': {
    width: '100%',
    top: 34,
    left: '0',
    color: '#606C5D',
  },
  ...(isActive && {
    color: '#606C5D',
    '&::after': {
      width: '100%',
      top: 34,
      left: '0',
    },
  }),
}));
