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
        <CustomNavLink exact to="/" activeStyle={{ color: '#ff0808' }}>
          Home
        </CustomNavLink>
        <CustomNavLink exact to="/projects" activeStyle={{ color: '#ff0808' }}>
          Projects
        </CustomNavLink>
      </ContainerLinks>
    </Container>
  );
};
