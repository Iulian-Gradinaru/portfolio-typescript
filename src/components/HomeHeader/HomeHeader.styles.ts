import { styled } from '@mui/system';

export const Container = styled('div')(() => {
  return {
    backgroundColor: '#F1C376',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'column',
    alignItems: 'center',
    margin: '-7px',
    padding: '3rem 1rem',
    // maxWidth: '',
  };
});

export const Title = styled('h3')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2.125rem',
    fontWeight: 400,
    letterSpacing: ' 0.00735em',
  };
});

export const Img = styled('img')(() => {
  return {
    width: '11rem',
    height: '11rem',
    // margin: '3rem 0',
    boxShadow: '0 0 3pt 2pt red',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '1.25rem',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '50%',
    lineHeight: 1,
    userSelect: 'none',
    justifyContent: 'center',
  };
});

export const Descriptions = styled('h3')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
    maxWidth: 700,
    textAlign: 'center',
  };
});
