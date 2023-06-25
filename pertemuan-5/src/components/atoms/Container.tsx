import type { ReactElement, ReactNode } from "react";
import { CSSProp, CSSProperties } from "styled-components";
import { Div } from '../../styles/mame-styled/core/HtmlTag';

interface Props {
  children: ReactNode;
  cssXs?: CSSProp | CSSProperties;
}

export default function Container({ children, cssXs, ...props }: Props): ReactElement {
  return <>
    <Div cssXs={{ maxWidth: 1400, margin: "auto", padding: "0 1rem",...cssXs as object }} {...props}>{children}</Div>
  </>
}
