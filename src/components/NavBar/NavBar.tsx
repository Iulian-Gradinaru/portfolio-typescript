import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import {
  Container,
  ContainerParagraph,
  Paragraph,
  HamburgerIcon,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from './NavBar.styles';

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 600px)');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobile = true;

  const navbarContent =
    isMobile && isMobileView ? (
      <>
        <HamburgerIcon onClick={toggleMobileMenu} />
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
      </>
    ) : (
      <>
        <ContainerLinks>
          <CustomNavLink exact={true} to="/" activeStyle={{ color: '#F7E6C4' }}>
            Home
          </CustomNavLink>
          <CustomNavLink
            exact
            to="/projects"
            activeStyle={{ color: '#F7E6C4' }}
          >
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
        {navbarContent}
      </ContainerWrapper>
    </Container>
  );
};
