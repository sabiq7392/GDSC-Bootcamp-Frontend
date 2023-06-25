import type { ReactElement } from "react";
import { P } from '../../styles/mame-styled/core/HtmlTag';
import STYLES_CONFIG from '../../styles/styles.config';

const { color } = STYLES_CONFIG;

interface Props {
  text: string;
}

export default function Description({ text, ...props }: Props): ReactElement {
  return <P cssXs={{ fontSize: "1.5rem", color: color.gray, lineHeight: "175%" }} {...props}>{text}</P>;
}
