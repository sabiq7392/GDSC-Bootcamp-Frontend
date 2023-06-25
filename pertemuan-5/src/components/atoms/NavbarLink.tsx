import type { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import { A } from "../../styles/mame-styled/core/HtmlTag";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";

export default function NavbarLink({ ...props }: HTMLTag): ReactElement {
  const navbarLinkData = ['Global', 'Indonesia', 'Provinsi', 'About'];
  const cssXs: CSSProperties = {
    display: "grid",
    placeItems: "center",
    padding: "1rem",
    fontSize: "1.563rem",
    color: "white"
  };
  
  return (
    <>
      {navbarLinkData.map((navLink) =>
        <A cssXs={cssXs} {...props} key={navLink} href={'#' + navLink.toLowerCase()}>
          {navLink}
        </A>
      )}
    </>
  );
}
