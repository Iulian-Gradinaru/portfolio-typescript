/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Paper, Grid } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled(Paper)(() => {
  return {
    backgroundColor: '#ffff',
    margin: '-7px',
    padding: '3rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

export const StylesGrid = styled(Grid)(() => {
  return {
    width: '100%',
  };
});
