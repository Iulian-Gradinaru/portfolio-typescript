import { useState } from 'react';

/**
 * Imports Material UI components
 */
import { useMediaQuery } from '@mui/material';

/**
 * Imports styles components
 */
import {
  Container,
  ContainerParagraph,
  Paragraph,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from './NavBar.styles';

/**
 * Displays the component
 */
export const NavBar: React.FC = () => {
  /**
   * Initializes mobile menu
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Handles the mobile view
   */
  const isMobileView = useMediaQuery('(max-width: 600px)');

  /**
   * Handles the mobile menu state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handles the Nav content
   */
  const navbarContent = (
    <>
      <ContainerLinks>
        <CustomNavLink exact={true} to="/" activeStyle={{ color: '#ffff' }}>
          Home
        </CustomNavLink>
        <CustomNavLink exact to="/projects" activeStyle={{ color: '#ffff' }}>
          Projects
        </CustomNavLink>
      </ContainerLinks>
      <MobileMenu isOpen={isMobileMenuOpen} to={''}>
        <MobileNavLink
          exact={true}
          to="/"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/projects"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Projects
        </MobileNavLink>
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Paragraph>
            Iulian Gradinaru <br />
            Front End Developer
          </Paragraph>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
