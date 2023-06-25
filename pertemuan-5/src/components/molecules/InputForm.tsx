import type { ChangeEventHandler, LegacyRef, ReactElement } from "react";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import { Input, Label } from "../../styles/mame-styled/core/HtmlTag";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";
import STYLES_CONFIG from "../../styles/styles.config";

const { color } = STYLES_CONFIG;

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'number';
  innerRef: LegacyRef<any>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function InputForm({ id, onChange, label, innerRef, placeholder, type }: Props): ReactElement {
  return (
    <Grid gap={pxToRem(10)}>
      <Label htmlFor={id} cssXs={{ color: color.black, fontSize: "1.5rem" }}>
        {label}
      </Label>
      <Input
        id={id}
        onChange={onChange}
        required
        ref={innerRef}
        placeholder={placeholder || '0'}
        style={{ color: color.gray, fontSize: "1rem", padding: ".7rem", borderRadius: 10, border: `1px solid ${color.primary}` }}
        type={type}
        defaultValue={0}
      />
    </Grid>
  );
}
