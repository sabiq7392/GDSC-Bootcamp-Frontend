import type { ChangeEventHandler, LegacyRef, ReactElement, ReactNode } from "react";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import { Div, Label, Select } from "../../styles/mame-styled/core/HtmlTag";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";
import STYLES_CONFIG from "../../styles/styles.config";

const { color } = STYLES_CONFIG;

interface Props {
  id: string;
  label: ReactNode | ReactNode[] | string;
  defaultValue:  string;
  innerRef: LegacyRef<any | undefined>;
  options: ReactNode | ReactNode[];
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export default function SelectForm({ id, onChange, label, name, defaultValue, innerRef, options }: Props): ReactElement {
  return (
    <Grid gap={pxToRem(10)}>
      <Label htmlFor={id} cssXs={{ color: color.black, fontSize: "1rem" }}>
        {label}
      </Label>
      <Div cssXs={{ padding: ".5rem", border: `1px solid ${color.primary}`, borderRadius: 10 }}>
        <Select
          id={id}
          onChange={onChange}
          required
          name={name}
          defaultValue={defaultValue}
          ref={innerRef}
          cssXs={{ color: color.gray, fontSize: "1rem", border: "none", width: "100%", background: "white" }}
        >
          {options}
        </Select>
      </Div>
    </Grid>
  );
}
