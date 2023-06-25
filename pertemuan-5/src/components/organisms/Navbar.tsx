import Container from '../atoms/Container';
import NavbarLink from '../atoms/NavbarLink';
import NavbarBrand from '../atoms/NavbarBrand';
// import './navbar.scss';
import NavbarNav from '../atoms/NavbarNav';
import type { ReactElement } from 'react';
import { Nav } from '../../styles/mame-styled/core/HtmlTag';
import { CSSProperties } from 'styled-components';
import STYLES_CONFIG from '../../styles/styles.config';

const { color } = STYLES_CONFIG;

export default function Navbar(): ReactElement {
  interface CSSXS {
    navbar: CSSProperties;
    navbarNav: CSSProperties;
    container: CSSProperties;
  }
  
  const cssXs: CSSXS = {
    navbar: {
      background: color.primary,
    },
    navbarNav: {
      display: "flex",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",
    },
  };

  return (
    <Nav cssXs={cssXs.navbar}>
      <Container cssXs={cssXs.container}>
        <NavbarBrand />
        <NavbarNav cssXs={cssXs.navbarNav}>
          <NavbarLink />
        </NavbarNav>
      </Container>
    </Nav>
  );
}


