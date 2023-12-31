/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    backgroundColor: '#fabe5a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'column',
    alignItems: 'center',
    margin: '-8px',
    padding: '3rem 1rem',
    color: '#000000',
  };
});

/**
 * Styles the Container
 */
export const Title = styled('h3')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2.125rem',
    fontWeight: 400,
    letterSpacing: ' 0.00735em',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  };
});

/**
 * Styles the Img
 */
export const Img = styled('img')(() => {
  return {
    width: '11rem',
    height: '11rem',
    boxShadow: '0 0 3pt 2pt #ffff',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '1.25rem',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '50%',
    lineHeight: 1,
    userSelect: 'none',
    justifyContent: 'center',
  };
});

/**
 * Styles the Descriptions
 */
export const Descriptions = styled('h3')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
    maxWidth: 700,
    textAlign: 'center',
  };
});
