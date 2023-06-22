import { styled } from '@mui/system';
import { Chip, Grid, Box } from '@mui/material';

export const CustomGrid = styled(Grid)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  };
});

export const CustomChip = styled(Chip)(() => {
  return {
    marginTop: '1rem',
    marginRight: '0.8rem',
    fontSize: '1.2rem',
  };
});

export const CustomImg = styled('img')(() => {
  return {
    display: 'block',
    width: '100%',
    height: 'auto',
  };
});

export const CustomBox = styled(Box)(() => {
  return {
    marginBottom: '2rem',
    flexGrow: 1,
  };
});

export const StackBox = styled(Box)(() => {
  return {
    marginBottom: '2rem',
  };
});

export const Stacklinks = styled(Box)(() => {
  return {
    display: 'flex',
    '& svg': {
      color: 'black',
      '&:hover': {
        color: 'red',
      },
    },
  };
});

// export const StylesBox = styled(Box)(() => {
//   return {
//     width: '100%',
//     height: '100%',
//   };
// });
