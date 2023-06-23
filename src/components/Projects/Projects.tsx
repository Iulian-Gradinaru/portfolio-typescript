/**
 * External Imports
 */
import { v4 } from 'uuid';

/**
 * Imports Material UI components
 */
// import Paper from "@material-ui/core/Paper";

import { Grid } from '@mui/material';

/**
 * Imports Components
 */
import { Project } from '../Project';

/**
 * Imports Projects
 */
import { projects } from '../utils/projects';

import { Container } from './Projects.styles';
/**
 * Imports the component styles
 */
// import { useStyles } from "./Projects.styles";

/**
 * Displays the component
 */
export const Projects: React.FC = () => {
  /**
   * Gets the component styles
   */
  // const classes = useStyles();

  /**
   * Handles generating projects
   */
  const generateProjects = () => {
    return projects.map((project) => <Project key={v4()} project={project} />);
  };

  return (
    <Container elevation={0} square>
      {/* className={classes.Projects} */}
      <Grid
        container
        justifyContent="center"
        direction="row"
        spacing={6}
        item
        xs={12}
        sm={10}
        md={11}
        lg={9}
        xl={7}
      >
        {generateProjects()}
      </Grid>
    </Container>
  );
};
