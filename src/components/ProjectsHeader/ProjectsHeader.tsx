import React from 'react';
import { Typography, Grid } from '@mui/material';
import {
  Container,
  StylesTypography,
  CustomTypography,
} from './ProjectsHeader.styles';

export const ProjectsHeader: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        item
        xs={12}
        sm={10}
        md={8}
        lg={5}
        xl={4}
      >
        <StylesTypography variant="h4">
          Here are some of my projects
        </StylesTypography>
        <CustomTypography variant="h5">
          I specialize in applications made with React. I am a huge fan of
          one-way data flow and Redux-like architecture. Most of my projects use
          TypeScript, as it saves time catching errors and providing fixes
          before running the code.
        </CustomTypography>
        <Typography variant="h5">
          Bellow you can check out some of my latest work.
        </Typography>
      </Grid>
    </Container>
  );
};
