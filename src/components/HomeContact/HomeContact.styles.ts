import { styled } from '@mui/system';
import { Button, Typography, Chip } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    backgroundColor: '#F7E6C4',
    padding: '0 1rem',
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '-7px',
  };
});

export const StylesTypography = styled(Typography)(() => {
  return {
    paddingTop: '1.5rem',
  };
});

export const StylesButton = styled(Button)(() => {
  return {
    marginTop: '2rem',
    backgroundColor: '#F1C376',
    borderRadius: 10,
    border: '2px solid #000000',
    color: 'white',

    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
    '&:hover': {
      '& a': {
        backgroundColor: '#696969',
        color: 'white',
      },
    },
  };
});

export const StyledChip = styled(Chip)(() => {
  return {
    marginTop: '2rem',
    fontSize: '1.2rem',
    backgroundColor: '#F7E6C4',
    color: 'black',
  };
});
