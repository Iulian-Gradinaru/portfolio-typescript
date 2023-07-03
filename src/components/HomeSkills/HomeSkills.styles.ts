/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Chip, Grid } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 1rem',
    backgroundColor: '#fabe5a',
    margin: '-7px',
  };
});

/**
 * Styles the Grid Container
 */
export const GridContainer = styled(Grid)(({ theme }) => {
  return {
    color: '#000000',
    width: '100%',
    margin: 0,
    '& > *:not(:last-child)': {
      borderRight: '3px solid #000000',
      paddingRight: 7,
    },
    [theme.breakpoints.down('sm')]: {
      '& > *:not(:last-child)': {
        borderRight: 'none',
        borderBottom: '3px solid #000000',
        paddingRight: 0,
        paddingBottom: 24,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      },
    },
  };
});

/**
 * Styles the Styled Chip
 */
export const StyledChip = styled(Chip)(() => {
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
