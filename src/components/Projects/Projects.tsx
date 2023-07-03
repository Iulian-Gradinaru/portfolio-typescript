/**
 * External Imports
 */
import { v4 } from 'uuid';

/**
 * Imports Components
 */
import { Project } from '../Project';

/**
 * Imports Projects
 */
import { projects } from '../utils/projects';

/**
 * Imports styles components
 */
import { Container, StylesGrid } from './Projects.styles';

/**
 * Displays the component
 */
export const Projects: React.FC = () => {
  /**
   * Handles generating projects
   */
  const generateProjects = () => {
    return projects.map((project) => <Project key={v4()} project={project} />);
  };

  return (
    <Container elevation={0} square>
      <StylesGrid
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
      </StylesGrid>
    </Container>
  );
};
