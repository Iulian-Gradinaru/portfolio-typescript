/**
 * Imports styled
 */
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    backgroundColor: '#F7E6C4',
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '-7px',
    color: '#606C5D',
    '& svg': {
      marginLeft: '1rem',
    },
  };
});

/**
 * Styles the Styles Box
 */
export const StylesBox = styled(Box)(() => {
  return {
    display: 'flex',
    paddingBottom: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  };
});

/**
 * Styles the Styles Typography
 */
export const StylesTypography = styled(Typography)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    color: '#606C5D',

    '&: hover': {
      textDecoration: 'underline',
      color: '606C5D',
    },
    '& a': {
      textDecoration: 'none',
      color: '#606C5D',
    },
    '& svg': {
      color: '#606C5D',
    },
    '& .MuiSvgIcon-root': {
      color: '#F7E6C4',
    },
  };
});
