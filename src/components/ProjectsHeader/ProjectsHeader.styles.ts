import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    padding: '3rem 1rem',
    backgroundColor: '#F1C376',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '-7px',
    color: '#606C5D',
  };
});

export const StylesTypography = styled(Typography)(() => {
  return {
    paddingBottom: '2rem',
  };
});

export const CustomTypography = styled(Typography)(() => {
  return {
    letterSpacing: '0.04rem',
    paddingBottom: '2.5rem',
  };
});
