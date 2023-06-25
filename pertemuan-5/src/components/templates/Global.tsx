import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Subtitle from '../atoms/Subtitle';
import Card from '../molecules/Card';
import data from '../../utils/constants/indonesia';
import { ReactElement, useEffect, useState } from 'react';
import { Article, H1, H2, Header } from '../../styles/mame-styled/core/HtmlTag';
import { Grid } from '../../styles/mame-styled/core/display/Grid';
import pxToRem from '../../styles/mame-styled/core/utils/calculate-font/pxToRem';

const getDataApi = async (SET_DATA: any) => {
  try {
    const response = await fetch('https://covid19.mathdro.id/api/countries/indonesia');
    const responseJson = await response.json();
    
    // return SET_DATA(responseJson);
    SET_DATA(responseJson);
  } catch (error) {
    console.error(error);
  }
};

export default function Global(): ReactElement {
  const [DATA, SET_DATA] = useState<any>();

  useEffect(() => {
    getDataApi(SET_DATA);
  }, []);

  if (!DATA) {
    return <H1>Loading...</H1>
  }

  return (
    <Article id="global" cssXs={{ background: "#F8F9FA", padding: "5rem 0" }}>
      <Container cssXs={{ display: "grid", gap: 30 }}>
        <Header cssXs={{ textAlign: "center" }}>
          <Heading as={H2} title="Indonesia" />
          <Subtitle text="Data Covid Berdasarkan Global" />
        </Header>
        <Grid cols={"repeat(auto-fit, minmax(400px, 1fr))"} gap={30} center>
          <Card title="Confirmed" total={DATA.confirmed.value} />
          <Card title="Recoverd" total={DATA.recovered.value} />
          <Card title="Death" total={DATA.deaths.value} />
        </Grid>
      </Container>
    </Article>
  );
}
