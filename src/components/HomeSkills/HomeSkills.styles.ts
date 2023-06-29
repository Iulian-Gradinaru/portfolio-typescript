import { styled } from '@mui/system';
import { Chip, Grid } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 1rem',
    backgroundColor: '#F1C376',
    margin: '-7px',
    color: '#606C5D',
  };
});

export const GridContainer = styled(Grid)(({ theme }) => {
  return {
    color: '#606C5D',
    '& > *:not(:last-child)': {
      borderRight: '5px solid #606C5D',
      paddingRight: 7,
    },
    [theme.breakpoints.down('sm')]: {
      '& > *:not(:last-child)': {
        borderRight: 'none',
        borderBottom: '5px solid #606C5D',
        paddingRight: 0,
        paddingBottom: 24,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      },
    },
  };
});

export const StyledChip = styled(Chip)(() => {
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
