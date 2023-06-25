import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import Subtitle from "../atoms/Subtitle";
import type { ReactElement } from "react";
import type { ProvincesData } from "../../utils/constants/provinces";
import { Article, H2, Header, Table, Tbody, Td, Th, Thead, Tr } from "../../styles/mame-styled/core/HtmlTag";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import { CSSProp, CSSProperties } from "styled-components";
import STYLES_CONFIG from "../../styles/styles.config";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";

const { color } = STYLES_CONFIG;

interface Props {
  covidProvinces: ProvincesData;
}

export default function Provinces({ covidProvinces }: Props): ReactElement {
  interface CSSXS {
    th_td: CSSProperties;
    th: CSSProperties;
    td: CSSProperties;
  }

  const cssXs: CSSXS = {
    th_td: {
      padding: pxToRem(10),
      fontSize: "1rem",
      border: `1px solid ${color.gray}`,
    },
    th: {
      color: color.primary,
    },
    td: {
      textAlign: "center",
      color: color.gray,
    },
  };

  const THEAD_DATA = ["No", "Provinsi", "Positif", "Sembuh", "Dirawat", "Meninggal"];

  return (
    <Article id="provinces" padding={"5rem 0"}>
      <Container cssXs={{ display: "grid", gap: pxToRem(60) }}>
        <Header cssXs={{ textAlign: "center" }}>
          <Heading as={H2} title="Provinsi" />
          <Subtitle text="Data Covid Berdasarkan Provinsi" />
        </Header>
        <Grid center>
          <Table cssXs={{ borderCollapse: "collapse", maxWidth: 813, width: "100%" }}>
            <Thead>
              <Tr>
                {THEAD_DATA.map((name) => <Th key={name} cssXs={{ ...cssXs.th_td, ...cssXs.th }}>{name}</Th>)}
              </Tr>
            </Thead>
            <Tbody>
              {covidProvinces.map(({ kota, kasus, sembuh, meninggal, dirawat }, index) => 
                <TableContent 
                  key={kota} 
                  no={index + 1} 
                  provinsi={kota} 
                  positif={kasus}
                  sembuh={sembuh}
                  meninggal={meninggal}
                  dirawat={dirawat}
                  cssXs={{ ...cssXs.th_td, ...cssXs.td }}
                />
              )}
            </Tbody>
          </Table>
        </Grid>
      </Container>
    </Article>
  );
}


interface TableContentProps {
  no: number;
  provinsi: string;
  positif: number;
  sembuh: number;
  dirawat: number;
  meninggal: number;
  cssXs: CSSProperties | CSSProp;
}
function TableContent({ no, provinsi, positif = 0, sembuh = 0, dirawat = 0, meninggal = 0, cssXs }: TableContentProps): ReactElement {
  const TBODY_DATA = [no, provinsi, positif, sembuh, dirawat, meninggal];
  return (
    <Tr>
      {TBODY_DATA.map((name, index) => <Td key={index} cssXs={cssXs}>{name}</Td>)}
    </Tr>
  );
}
