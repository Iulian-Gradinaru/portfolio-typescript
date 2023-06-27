import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const Container = styled(Paper)(() => {
  return {
    backgroundColor: '#F7E6C4',
    margin: '-7px',
    padding: '3rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // color: '#606C5D',
  };
});
