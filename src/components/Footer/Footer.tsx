import React from 'react';
import { Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Container, StylesBox, StylesTypography } from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <StylesBox>
        <StylesTypography variant="h6">
          <FontAwesomeIcon
            size="lg"
            icon={faGithub}
            style={{ color: '#F1C376' }}
          />{' '}
          <Link target="_blank" href="https://github.com/Iulian-Gradinaru">
            GitHub
          </Link>
        </StylesTypography>
        <StylesTypography variant="h6">
          <FontAwesomeIcon
            size="lg"
            icon={faLinkedin}
            style={{ color: '#F1C376' }}
          />
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/iulian-gradinaru/"
          >
            Linkedin
          </Link>
        </StylesTypography>
      </StylesBox>
      <Typography variant="h6">Copyright © 2023 Iulian Gradinaru</Typography>
    </Container>
  );
};
