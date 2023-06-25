import type { ReactElement } from "react";
import { CSSProp } from "styled-components";
import { P } from '../../styles/mame-styled/core/HtmlTag';

interface Props {
  total: number;
  color?: string;
  cssXs?: CSSProp;
}

export default function Total({ total, color, cssXs, ...props }: Props): ReactElement {
  return <P cssXs={{ fontSize: "3.813rem", color, ...cssXs as object }} {...props}>{total}</P>
}
