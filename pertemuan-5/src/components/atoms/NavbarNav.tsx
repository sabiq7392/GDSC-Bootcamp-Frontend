import type { ReactElement, ReactNode } from 'react';
import { Div } from '../../styles/mame-styled/core/HtmlTag';
import { HTMLTag } from '../../styles/mame-styled/core/utils/types';

interface Props extends HTMLTag {
  children: ReactNode | ReactNode[];
}

export default function NavbarNav({ children, ...props }: Props): ReactElement {
  return <Div className="navbar__nav" {...props}>{children}</Div>
}
