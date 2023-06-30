/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    backgroundColor: '#F1C376',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'column',
    alignItems: 'center',
    margin: '-7px',
    padding: '3rem 1rem',
    color: '#606C5D',
  };
});

/**
 * Styles the Container
 */
export const Title = styled('h3')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2.125rem',
    fontWeight: 400,
    letterSpacing: ' 0.00735em',
  };
});

/**
 * Styles the Img
 */
export const Img = styled('img')(() => {
  return {
    width: '11rem',
    height: '11rem',
    boxShadow: '0 0 3pt 2pt white',
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
