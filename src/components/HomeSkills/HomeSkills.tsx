/**
 * External Imports
 */
import { v4 } from 'uuid';

/**
 * Imports Material UI components
 */
import { Grid, Box, Typography } from '@mui/material';

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';

/**
 * Imports skills
 */
import { devTools, frontEndSkills, backEndSkills } from '../utils/index';

/**
 * Imports styles components
 */
import { Container, StyledChip, GridContainer } from './HomeSkills.styles';

/**
 * Displays the component
 */
export const HomeSkils: React.FC = () => {
  return (
    <Container>
      <GridContainer
        container
        justifyContent="center"
        direction="row"
        item
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
                <FontAwesomeIcon size="sm" icon={faCode} color="#fff" />{' '}
                Front-End
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
                <StyledChip key={v4()} variant="outlined" label={i} />
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Typography variant="h4" gutterBottom>
                <FontAwesomeIcon size="sm" icon={faServer} color="#fff" />{' '}
                Back-End
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
                <StyledChip key={v4()} variant="outlined" label={i} />
              ))}
            </Box>
          </Box>
        </Grid>
        {/* <Line /> */}
        <Grid item sm={12} md={4} lg={4}>
          <Box>
            <Box>
              <Typography variant="h4" gutterBottom>
                <FontAwesomeIcon size="sm" icon={faTools} color="#fff" />{' '}
                Dev-Tools & Others
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
                <StyledChip key={v4()} variant="outlined" label={i} />
              ))}
            </Box>
          </Box>
        </Grid>
      </GridContainer>
    </Container>
  );
};
