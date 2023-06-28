// import {
//   Container,
//   Paragraph,
//   CustomNavLink,
//   ContainerParagraph,
//   ContainerLinks,
// } from './NavBar.styles';

// export const NavBar = () => {
//   return (
//     <Container>
//       <ContainerParagraph>
//         <Paragraph>
//           Iulian Gradinaru <br />
//           Front End Developer
//         </Paragraph>
//       </ContainerParagraph>
//       <ContainerLinks>
//         <CustomNavLink exact={true} to="/" activeStyle={{ color: '#F7E6C4' }}>
//           Home
//         </CustomNavLink>
//         <CustomNavLink exact to="/projects" activeStyle={{ color: '#F7E6C4' }}>
//           Projects
//         </CustomNavLink>
//       </ContainerLinks>
//     </Container>
//   );
// };

import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import {
  Container,
  ContainerParagraph,
  Paragraph,
  HamburgerIcon,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
} from './NavBar.styles';

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <ContainerParagraph>
        <Paragraph>
          Iulian Gradinaru <br />
          Front End Developer
        </Paragraph>
      </ContainerParagraph>
      <HamburgerIcon onClick={toggleMobileMenu} />
      <ContainerLinks>
        <CustomNavLink exact={true} to="/" activeStyle={{ color: '#F7E6C4' }}>
          Home
        </CustomNavLink>
        <CustomNavLink exact to="/projects" activeStyle={{ color: '#F7E6C4' }}>
          Projects
        </CustomNavLink>
      </ContainerLinks>
      <MobileMenu isOpen={isMobileMenuOpen} to={''}>
        <MobileNavLink
          exact={true}
          to="/"
          activeStyle={{ color: '#F7E6C4' }}
          onClick={toggleMobileMenu}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/projects"
          activeStyle={{ color: '#F7E6C4' }}
          onClick={toggleMobileMenu}
        >
          Projects
        </MobileNavLink>
      </MobileMenu>
    </Container>
  );
};
