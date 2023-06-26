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
        <CustomNavLink exact={true} to="/" activeStyle={{ color: 'white' }}>
          Home
        </CustomNavLink>
        <CustomNavLink exact to="/projects" activeStyle={{ color: 'white' }}>
          Projects
        </CustomNavLink>
      </ContainerLinks>
    </Container>
  );
};
