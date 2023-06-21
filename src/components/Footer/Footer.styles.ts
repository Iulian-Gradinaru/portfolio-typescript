import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

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
    '& svg': {
      marginLeft: '1rem',
    },
  };
});

export const StylesBox = styled(Box)(() => {
  return {
    display: 'flex',
    paddingBottom: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 30,
    // textDecoration: 'none',
    // '&: hover': {
    //   textDecoration: 'underline',
    // },
  };
});

export const StylesTypography = styled(Typography)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,

    '&: hover': {
      textDecoration: 'underline',
      color: 'black',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    '& svg': {
      color: 'black',
    },
  };
});
