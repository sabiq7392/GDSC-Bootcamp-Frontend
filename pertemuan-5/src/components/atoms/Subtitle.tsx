import type { ReactElement } from "react";
import { Small } from '../../styles/mame-styled/core/HtmlTag';
import STYLES_CONFIG from '../../styles/styles.config';

const { color } = STYLES_CONFIG;

interface Props {
  text: string;
}

export default function Subtitle({ text, ...props }: Props): ReactElement {
  return <Small cssXs={{ fontSize: "1rem", color: color.secondary }} {...props}>{text}</Small>
}
