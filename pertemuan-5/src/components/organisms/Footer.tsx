import Authors from '../atoms/Authors';
import Container from '../atoms/Container';
import NavbarBrand from '../atoms/NavbarBrand';
import NavbarLink from '../atoms/NavbarLink';
import NavbarNav from '../atoms/NavbarNav';
import type { ReactElement } from 'react';
import STYLES_CONFIG from '../../styles/styles.config';
import { Footer as MameFooter, Header } from '../../styles/mame-styled/core/HtmlTag';
import { CSSProperties } from 'styled-components';
import pxToRem from '../../styles/mame-styled/core/utils/calculate-font/pxToRem';

const { color } = STYLES_CONFIG;

export default function Footer(): ReactElement {
  interface CSSXS {
    footer: CSSProperties;
    container: CSSProperties;
    header: CSSProperties;
    navbarNav: CSSProperties;
  }

  const cssXs: CSSXS = {
    footer: {
      backgroundColor: color.primary,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "3rem 0",
    },
    header: {
      display: "grid",
      gap: pxToRem(5),
    },
    navbarNav: {
      display: "flex",
    },
  };

  return (
    <MameFooter cssXs={cssXs.footer}>
      <Container cssXs={cssXs.container}>
        <Header cssXs={cssXs.header}>
          <NavbarBrand />
          <Authors />
        </Header>
        <NavbarNav cssXs={cssXs.navbarNav}>
          <NavbarLink />
        </NavbarNav>
      </Container>
    </MameFooter>
  );
}


