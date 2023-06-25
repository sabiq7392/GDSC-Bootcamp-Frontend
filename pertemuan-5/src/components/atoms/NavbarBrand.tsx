import type { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import { A } from "../../styles/mame-styled/core/HtmlTag";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";

export default function NavbarBrand({ ...props }: HTMLTag): ReactElement {
  const cssXs: CSSProperties = {
    color: "white",
    fontSize: pxToRem(39),
  };

  return <A href="/" cssXs={cssXs} className="navbar__brand" {...props}>Covid ID</A>
}
