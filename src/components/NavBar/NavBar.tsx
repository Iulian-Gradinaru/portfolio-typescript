import {
  Container,
  Paragraph,
  CustomNavLink,
  ContainerParagraph,
  ContainerLinks,
} from './NavBar.styles';

export const NavBar = () => {
  return (
    <Container>
      <ContainerParagraph>
        <Paragraph>
          Iulian Gradinaru <br />
          Front End Developer
        </Paragraph>
      </ContainerParagraph>
      <ContainerLinks>
        <CustomNavLink exact={true} to="/" activeStyle={{ color: '#F7E6C4' }}>
          Home
        </CustomNavLink>
        <CustomNavLink exact to="/projects" activeStyle={{ color: '#F7E6C4' }}>
          Projects
        </CustomNavLink>
      </ContainerLinks>
    </Container>
  );
};
