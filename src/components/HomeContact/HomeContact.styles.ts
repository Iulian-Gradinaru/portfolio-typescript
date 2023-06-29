import { styled } from '@mui/system';
import { Button, Typography, Chip } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    backgroundColor: '#F1C376',
    padding: '0 1rem',
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '-7px',
    color: '#606C5D',
    paddingBottom: 30,
  };
});

export const StylesTypography = styled(Typography)(() => {
  return {
    paddingTop: '1.5rem',
  };
});

export const StylesButton = styled(Button)(() => {
  return {
    fontSize: 25,
    marginTop: '2rem',
    backgroundColor: '#F1C376',
    borderRadius: 10,
    border: '2px solid #606C5D',
    color: '#606C5D',
    paddingLeft: 20,
    paddingRight: 20,
    '&:hover': {
      backgroundColor: '#F7E6C4',
    },
  };
});

export const StyledChip = styled(Chip)(() => {
  return {
    marginTop: '2rem',
    fontSize: '1.2rem',
    backgroundColor: '#F7E6C4',
    color: '#606C5D',
    border: '2px solid #606C5D',
    padding: 12,
  };
});
