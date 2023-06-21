import React from 'react';
import { Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  StylesTypography,
  StylesButton,
  StyledChip,
} from './HomeContact.styles';

export const HomeContact: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'mailto:iulian_gradinaru@yahoo.com';
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        xs={11}
        sm={9}
        md={6}
        lg={4}
        xl={4}
      >
        <Typography variant="h4">
          <FontAwesomeIcon size="sm" icon={faLightbulb} />
          Interested in hiring or collaborating?
        </Typography>
        <StylesTypography variant="h6">
          Whether you have a question about a project, if you are interested in
          hiring or collaborating. I'd love to hear from you!
        </StylesTypography>
        <StylesButton size="large" variant="outlined" onClick={handleClick}>
          Let's Talk!
        </StylesButton>
        <StyledChip
          // color="secondary"
          variant="outlined"
          label="iulian_gradinaru@yahoo.com "
        />
      </Grid>
    </Container>
  );
};
