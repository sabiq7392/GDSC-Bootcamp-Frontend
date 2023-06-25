import Heading from '../atoms/Heading';
import Total from '../atoms/Total';
import type { ReactElement } from "react";
import { H3, Section } from '../../styles/mame-styled/core/HtmlTag';
import { HeadingElement } from '../../types/types';
import { CSSProp } from 'styled-components';
import STYLES_CONFIG from '../../styles/styles.config';

interface Props {
  title: string;
  total: number;
  color?: string;
  as?: HeadingElement;
}

export default function Card({ as, title, total, color }: Props): ReactElement {
  const cssXs: CSSProp = {
    borderRadius: "1.25rem",
    display: "grid",
    placeItems: "center",
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0,0,0, .25)",
    padding: "5rem",
    "&:nth-child(1)": {
      color: STYLES_CONFIG.color.primary,
    },
    "&:nth-child(2)": {
      color: STYLES_CONFIG.color.secondary,
    },
    "&:nth-child(3)": {
      color: STYLES_CONFIG.color.danger,
    },
  };

  return (
    <Section cssXs={cssXs}>
      <Heading as={as || H3} cssXs={{ color: color ?? 'rgba(7, 59, 76, 1)', fontSize: 39 }} title={title} />
      <Total total={total} />
    </Section>
  );
}
