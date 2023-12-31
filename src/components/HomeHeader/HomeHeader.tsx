/**
 * Imports images
 */
import Portret from '../../assets/portret-eu.jpeg';

/**
 * Imports styles components
 */
import { Container, Title, Img, Descriptions } from './HomeHeader.styles';

/**
 * Displays the component
 */
export const HomeHeader: React.FC = () => {
  return (
    <Container>
      <Title>Front End Developer</Title>
      <Img src={Portret} alt="Portret" />
      <Descriptions>
        Hi there! My name is Iulian. I'm a passionate web developer. I design
        and code web applications
      </Descriptions>
    </Container>
  );
};
