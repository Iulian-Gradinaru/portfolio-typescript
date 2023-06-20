import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';
import { Grid, Box, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { Container, StyledChip } from './HomeSkils.styles';
/**
 * Imports skills
 */
import { devTools, frontEndSkills, backEndSkills } from '../utils/index';

export const HomeSkils: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row"
        spacing={3}
        xs={12}
        sm={10}
        md={11}
        lg={9}
        xl={7}
      >
        <Grid item sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Typography variant="h4" gutterBottom>
                <FontAwesomeIcon size="sm" icon={faCode} /> Front-End
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                Improving web performance and responsiveness, as well as
                tackling cross-browser compatibility issues and accessibility
                are my top priority.
              </Typography>
            </Box>
            <Box>
              {frontEndSkills.map((i: string) => (
                <StyledChip
                  key={v4()}
                  color="secondary"
                  variant="outlined"
                  label={i}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Typography variant="h4" gutterBottom>
                <FontAwesomeIcon size="sm" icon={faServer} /> Back-End
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                Ensuring security, scalability and handling of the application
                logic are just a few of the things I enjoy working on the most.
              </Typography>
            </Box>
            <Box>
              {backEndSkills.map((i: string) => (
                <StyledChip
                  key={v4()}
                  color="secondary"
                  variant="outlined"
                  label={i}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Typography variant="h4" gutterBottom>
                <FontAwesomeIcon size="sm" icon={faTools} /> Dev-Tools & Others
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                In order to create amazing apps, you need amazing dev tools and
                reliable services.
              </Typography>
            </Box>
            <Box>
              {devTools.map((i: string) => (
                <StyledChip
                  key={v4()}
                  color="secondary"
                  variant="outlined"
                  label={i}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
