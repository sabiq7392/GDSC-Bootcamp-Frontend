import React from 'react';
import type { ReactElement } from 'react';
import type { HTMLTag } from "../../styles/mame-styled/core/utils/types";
import STYLES_CONFIG from '../../styles/styles.config';
import { HeadingElement } from '../../types/types';
import { H1 } from '../../styles/mame-styled/core/HtmlTag';

const { color } = STYLES_CONFIG;

interface Props extends HTMLTag {
  as?: HeadingElement;
  title: string;
}

export default function Heading({ as, title, ...props }: Props): ReactElement {
  return React.createElement(
    as || H1, 
    {
      cssXs: {
        color: color.primary,
        fontSize: "3.813rem",
        fontWeight: 500,
      },
      ...props,
    }, 
    title
  );
}
