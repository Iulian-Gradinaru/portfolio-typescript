/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Paper } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled(Paper)(() => {
  return {
    backgroundColor: '#F7E6C4',
    margin: '-7px',
    padding: '3rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});
