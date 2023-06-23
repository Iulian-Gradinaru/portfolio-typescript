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

export const LargeImageDiv = styled('div')(() => {
  return {
    display: 'flex',
    width: '87%',
    height: '73%',
    border: '10px solid #E0E0E0',
    borderRadius: 10,
  };
});

export const TabletImageDiv = styled('div')(() => {
  return {
    zIndex: 2,
    border: '10px solid #E0E0E0',
    display: 'flex',
    width: '31%',
    height: '37%',
    margin: -185,
    marginTop: 3,
    borderRadius: 10,
  };
});

export const MobileImageDiv = styled('div')(() => {
  return {
    zIndex: 2,

    border: '10px solid #E0E0E0',
    display: 'flex',
    width: '17%',
    height: '32%',
    margin: -2,
    marginTop: 219,
    marginLeft: 131,
    borderRadius: 10,
  };
});

export const StylesImage = styled('img')(() => {
  return {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };
});
