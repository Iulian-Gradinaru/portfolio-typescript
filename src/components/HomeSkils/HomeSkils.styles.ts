import { styled } from '@mui/system';
import { Chip } from '@mui/material';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 1rem',
    backgroundColor: '#F1C376',
    margin: '-7px',
  };
});

export const StyledChip = styled(Chip)(() => {
  return {
    marginTop: '1rem',
    marginRight: '0.8rem',
    fontSize: '1.2rem',
    border: '1px solid, #F7E6C4',
    fontWeight: 'bold',
    backgroundColor: '#F1C376',
    color: 'black',
    // Alte stiluri
  };
});
