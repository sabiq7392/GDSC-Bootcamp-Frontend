import type { ReactElement } from "react";
import type { HTMLTag } from '../../styles/mame-styled/core/utils/types';
import { A, Button as MameButton } from "../../styles/mame-styled/core/HtmlTag";
import { CSSProperties } from 'styled-components';
import STYLES_CONFIG from '../../styles/styles.config';

const { color } = STYLES_CONFIG;

interface Props extends HTMLTag {
  title: string;
  submit?: true;
  href?: string;
}
export default function Button({ title, submit, href, cssXs, ...props }: Props): ReactElement {
  const cssXsGeneric: CSSProperties = {
    borderRadius: "0.625rem",
    fontSize: "1.5rem",
    backgroundColor: color.primary,
    color: "white",
    ...cssXs as object,
  };
  
  const cssXsDefault: { button: CSSProperties, anchor: CSSProperties } = {
    button: {
      padding: ".2rem",
      border: "none",
      ...cssXsGeneric,
    },
    anchor: {
      display: "inline-block",
      padding: ".8rem 3rem",
      minHeight: 44,
      minWidth: 44,
      ...cssXsGeneric,
    },
  };
  
  return (
    submit 
    ? (
      <MameButton type={"submit"} cssXs={cssXsDefault.button}>
        Submit
      </MameButton>
    )
    :  (
      <A cssXs={cssXsDefault.anchor} href={href} {...props}>
        {title}
      </A>
    )
  );
}
