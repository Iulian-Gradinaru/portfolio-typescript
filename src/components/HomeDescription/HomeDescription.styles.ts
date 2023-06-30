/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Grid, Box, Button } from '@mui/material';

/**
 * Styles the Container
 */
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

/**
 * Styles the Grid Img
 */
export const GridImg = styled(Grid)(() => {
  return {
    width: '100%',
    height: 'auto',
    display: 'block',
  };
});

/**
 * Styles the Custom Img
 */
export const CustomImg = styled('img')(() => {
  return {
    width: 'inherit',
  };
});

/**
 * Styles the Custom Button
 */
export const CustomButton = styled(Button)(() => {
  return {
    fontSize: 25,
    marginTop: '2rem',
    backgroundColor: '#F1C376',
    borderRadius: 10,
    border: '2px solid #606C5D',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,

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

/**
 * Styles the Custom Box
 */
export const CustomBox = styled(Box)(() => {
  return {
    marginBottom: '1rem',
  };
});
