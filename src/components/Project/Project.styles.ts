/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Chip, Grid, Box, Typography } from '@mui/material';

/**
 * Styles the Custom Grid
 */
export const CustomGrid = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  };
});

/**
 * Styles the Custom Chip
 */
export const CustomChip = styled(Chip)(() => {
  return {
    backgroundColor: '#F1C376',
    marginTop: '1rem',
    marginRight: '0.6rem',
    fontSize: '1.2rem',
    border: '2px solid #606C5D',
    color: 'white',
    height: 40,
  };
});

/**
 * Styles the Custom Img
 */
export const CustomImg = styled('img')(() => {
  return {
    display: 'block',
    width: '100%',
    height: 'auto',
  };
});

/**
 * Styles the Custom Box
 */
export const CustomBox = styled(Box)(() => {
  return {
    marginBottom: '2rem',
    flexGrow: 1,
  };
});

/**
 * Styles the Stack Box
 */
export const StackBox = styled(Box)(() => {
  return {
    marginBottom: '2rem',
  };
});

/**
 * Styles the Stack Links
 */
export const StackLinks = styled(Box)(() => {
  return {
    display: 'flex',
    '& svg': {
      color: '#606C5D',
      '&:hover': {
        color: '#F1C376',
      },
    },
  };
});

/**
 * Styles the Styles Typography
 */
export const StylesTypography = styled(Typography)(() => {
  return {
    color: '#606C5D',
  };
});

/**
 * Styles the Image Container
 */
export const ImageContainer = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    height: '80%',
  };
});

/**
 * Styles the Large mageDiv
 */
export const LargeImageDiv = styled('div')(() => {
  return {
    display: 'flex',
    width: '87%',
    height: '73%',
    border: '10px solid black',
    borderRadius: 10,
  };
});

/**
 * Styles the Tablet ImageDiv
 */
export const TabletImageDiv = styled('div')(() => {
  return {
    zIndex: 2,
    border: '10px solid black',
    display: 'flex',
    width: '31%',
    height: '37%',
    margin: -185,
    marginTop: 3,
    borderRadius: 10,
  };
});

/**
 * Styles the Mobile ImageDiv
 */
export const MobileImageDiv = styled('div')(() => {
  return {
    zIndex: 2,
    border: '10px solid black',
    display: 'flex',
    width: '17%',
    height: '32%',
    margin: -2,
    marginTop: 219,
    marginLeft: 131,
    borderRadius: 10,
  };
});

/**
 * Styles the Styles Image
 */
export const StylesImage = styled('img')(() => {
  return {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };
});
