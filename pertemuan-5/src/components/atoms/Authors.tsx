import type { ReactElement } from "react";
import { Small } from '../../styles/mame-styled/core/HtmlTag';

interface Props {
  name?: string;
}

export default function Authors({ name }: Props): ReactElement {
  return <Small cssXs={{ fontSize: "1.563rem", color: "white" }}>Developed By {name || 'aufaroot18'}</Small>
}
