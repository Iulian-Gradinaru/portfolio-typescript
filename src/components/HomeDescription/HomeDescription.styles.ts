import { styled } from '@mui/system';
import { Grid, Box, Button } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    // paddingTop: '3em',
    backgroundColor: '#F7E6C4',
    margin: '-7px',
    padding: '3rem 1rem',
  };
});

// export const CustomGrid = styled(Grid)(() => {
//   return {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
//     flexWrap: 'wrap',
//   };
// });

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
    marginTop: '2rem',
    backgroundColor: 'red',
    borderRadius: 10,
    border: '2px solid black',

    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
    '&:hover': {
      '& a': {
        color: 'blue',
      },
    },
  };
});

export const CustomBox = styled(Box)(() => {
  return {
    marginBottom: '1rem',
  };
});
