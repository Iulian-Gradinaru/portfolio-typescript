/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Typography } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    padding: '3rem 1rem',
    backgroundColor: '#fabe5a',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '-7px',
    color: '#000000',
  };
});

/**
 * Styles the Styles Typography
 */
export const StylesTypography = styled(Typography)(() => {
  return {
    paddingBottom: '2rem',
  };
});

/**
 * Styles the Custom Typography
 */
export const CustomTypography = styled(Typography)(() => {
  return {
    letterSpacing: '0.04rem',
    paddingBottom: '2.5rem',
  };
});
