import { styled } from '@mui/system';
import { Grid, Box, Button } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',

    backgroundColor: '#F7E6C4',
    margin: '-7px',
    padding: '3rem 1rem',
    color: '#606C5D',
  };
});

export const GridImg = styled(Grid)(() => {
  return {
    width: '100%',
    height: 'auto',
    display: 'block',
  };
});

export const CustomImg = styled('img')(() => {
  return {
    width: 'inherit',
  };
});

export const CustomButton = styled(Button)(() => {
  return {
    fontSize: 25,
    marginTop: '2rem',
    backgroundColor: '#F1C376',
    borderRadius: 10,
    border: '2px solid #606C5D',
    paddingLeft: 20,
    paddingRight: 20,

    '& a': {
      textDecoration: 'none',
      color: '#606C5D',
    },
    '&:hover': {
      backgroundColor: '#F7E6C4',
      '& a': {
        color: '#606C5D',
      },
    },
  };
});

export const CustomBox = styled(Box)(() => {
  return {
    marginBottom: '1rem',
  };
});
