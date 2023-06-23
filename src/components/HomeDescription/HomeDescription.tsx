import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';
import ResponseImg from '../../assets/Responsive-image.png';
import {
  Container,
  GridImg,
  CustomImg,
  CustomButton,
  // CustomGrid,
} from './HomeDescription.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faMobileAlt,
  faFireAlt,
  faCogs,
  faPencilRuler,
} from '@fortawesome/free-solid-svg-icons';

export const HomeDescription: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={3}
        item
        xs={11}
        sm={10}
        md={11}
        lg={9}
        xl={7}
      >
        <GridImg item xs={12} sm={12} md={7} lg={7} xl={7}>
          <CustomImg src={ResponseImg} alt="example-responsive" />
        </GridImg>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Typography variant="h4" gutterBottom>
            <FontAwesomeIcon size="sm" icon={faFireAlt} /> Blazing Fast Web
            Applications
          </Typography>
          <Typography variant="h6">
            Fast load times and lag free interactions, responsive design that
            will work on any device, big or small. Intuitive and easy to use
            UX/UI.
          </Typography>
          <CustomButton>
            <Link to="/projects">View Portfolio</Link>
          </CustomButton>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        spacing={7}
        item
        xs={12}
        sm={10}
        md={11}
        lg={8}
        xl={7}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              <FontAwesomeIcon size="sm" icon={faBolt} color="red" /> Fast
            </Typography>
            <Typography variant="h6">
              Fast load times and lag free interactions are my highest priority.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              <FontAwesomeIcon size="sm" icon={faMobileAlt} /> Responsive
            </Typography>
            <Typography variant="h6">
              My layouts will work on any device, big or small.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              <FontAwesomeIcon size="sm" icon={faPencilRuler} /> Intuitive
            </Typography>
            <Typography variant="h6">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              <FontAwesomeIcon size="sm" icon={faCogs} /> Dynamic
            </Typography>
            <Typography variant="h6">
              Websites don't have to be static, I love making pages come to
              life.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
