import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { CustomNavLinkProps } from './NavBar.types';
import { FaBars } from 'react-icons/fa';

export const ContainerParagraph = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    cursor: 'pointer',
    margin: 0,
    padding: 10,
  };
});

export const Paragraph = styled('p')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: 0,
  paddingLeft: 22,
  paddingTop: 10,
  letterSpacing: '0.1rem',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
  },
}));

export const ContainerWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
  marginRight: '20px',
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
    backgroundColor: '#F7E6C4',
    content: '""',
    position: 'absolute',
    top: 34,
    left: '50%',
    transition:
      'left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '&:hover': {
    color: '#F7E6C4',
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

export const Container = styled('nav')(({ theme }) => ({
  backgroundColor: '#F1C376',
  height: '8vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  fontSize: 23,
  color: '#606C5D',
  margin: '-7px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}));

export const HamburgerIcon = styled(FaBars)(({ theme }) => ({
  fontSize: 30,
  color: '#606C5D',
  cursor: 'pointer',
  paddingLeft: 30,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MobileMenu = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isOpen',
})<CustomNavLinkProps>(({ theme, isOpen }) => ({
  display: isOpen ? 'flex' : 'none',
  flexDirection: 'column',
  gap: 20,
  marginTop: 20,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MobileNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: 30,
  color: '#606C5D',
  '&:hover': {
    color: '#F7E6C4',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
