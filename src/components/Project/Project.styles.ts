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
    backgroundColor: '#F7E6C4',
    marginTop: '1rem',
    marginRight: '0.6rem',
    fontSize: '1.2rem',
    border: '2px solid #000000',
    color: '#000000',
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
      color: '#000000',
      '&:hover': {
        color: '#fabe5a',
      },
    },
  };
});

/**
 * Styles the Styles Typography
 */
export const StylesTypography = styled(Typography)(() => {
  return {
    color: '#000000',
  };
});
