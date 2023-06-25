import Container from "../atoms/Container";
import { FormEvent, SetStateAction, useRef } from "react";
import InputForm from "../molecules/InputForm";
import SelectForm from "../molecules/SelectForm";
import Button from "../atoms/Button";
import type { ReactElement } from "react";
import { ProvincesData } from "../../utils/constants/provinces";
import ImagesCovidForm from "../atoms/images/ImagesCovidForm";
import { Article, Div, Fieldset, Form, Legend } from "../../styles/mame-styled/core/HtmlTag";
import { CSSProperties } from "styled-components";
import STYLES_CONFIG from "../../styles/styles.config";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";

const { color } = STYLES_CONFIG;

interface Props {
  covidProvinces: ProvincesData;
  setCovidProvinces: (value: SetStateAction<ProvincesData>) => void;
}

export default function CovidForm({ covidProvinces, setCovidProvinces }: Props): ReactElement {
  const selectProvinsi = useRef<HTMLSelectElement>();
  const selectStatus = useRef<HTMLSelectElement>();
  const inputJumlah = useRef<HTMLInputElement>();

  const onCovidFormSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const findIndex = covidProvinces.findIndex(({ kota }: { kota: string }) => kota === (selectProvinsi.current as HTMLSelectElement).value);
    
    covidProvinces[findIndex] = {
      ...covidProvinces[findIndex],
      [(selectStatus.current as HTMLSelectElement).value]: Number((inputJumlah.current as HTMLInputElement).value),
    };

    setCovidProvinces([...covidProvinces]);
  };

  interface CSSXS {
    parent: CSSProperties;
    container: CSSProperties;
    fieldset: CSSProperties;
    legend: CSSProperties;
    form: CSSProperties;
  }

  const cssXs: CSSXS = {
    parent: {
      padding: "5rem 0",
    },
    container: {
      display: "grid",
      placeItems: "center",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },
    fieldset: {
      padding: "2rem",
      border: "none",
    },
    legend: {
      fontSize: pxToRem(61),
      fontWeight: 500,
      color: color.primary,
    },
    form: {
      display: "grid",
      gap: pxToRem(30),
    },
  };  

  return (
    <Article id="covidForm" cssXs={cssXs.parent}>
      <Container cssXs={cssXs.container}>
        <Div cssXs={{ padding: "2rem" }}>
          <ImagesCovidForm />
        </Div>
        <Fieldset cssXs={cssXs.fieldset}>
          <Legend cssXs={cssXs.legend}>Covid Form</Legend>
          <Form name="covid_form" onSubmit={onCovidFormSubmitHandler} cssXs={cssXs.form}>
            <SelectForm 
              id="select__provinsi" 
              label="Provinsi" 
              defaultValue="Jakarta" 
              innerRef={selectProvinsi}
              options={
                covidProvinces.map(({ kota }: { kota: string }) => <option key={kota} value={kota}>{kota}</option>)
              }
            />
              
            <SelectForm 
              id="select__status" 
              label="Status" 
              defaultValue="kasus" 
              innerRef={selectStatus}
              options={
                <>
                  <option value="kasus">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="dirawat">Dirawat</option>
                  <option value="meninggal">Meninggal</option>
                </>
              }
            />

            <InputForm 
              id="input__jumlah" 
              type="number" 
              label="Jumlah" 
              placeholder={'0'} 
              innerRef={inputJumlah}
            />

            <Button title="submit" submit />
          </Form>
        </Fieldset>
      </Container>
    </Article>
  );
}



