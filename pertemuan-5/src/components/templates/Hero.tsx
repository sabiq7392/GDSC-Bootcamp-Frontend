import Container from "../atoms/Container";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Description from "../atoms/Description";
import type { ReactElement } from "react";
import ImageHero from "../atoms/images/ImageHero";
import { Article,  H1, Header } from "../../styles/mame-styled/core/HtmlTag";
import { Flex } from "../../styles/mame-styled/core/display/Flex";
import pxToRem from "../../styles/mame-styled/core/utils/calculate-font/pxToRem";

export default function Hero(): ReactElement {
  return (
    <Article id="hero" padding={"5rem 0"}>
      <Container cssXs={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))", gap: "2rem" }}>
        <Flex cssXs={{ flexDirection: "column", gap: pxToRem(15), justifyContent: "space-between" }}>
          <Header>
            <Heading as={H1} title="Covid ID" />
            <Subtitle text="Monitoring Perkembangan Covid" />
          </Header>
          <Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since." />
          <Button title="Vaccine" href="#vaccine" cssXs={{ maxWidth: 200 }} />
        </Flex>
        <ImageHero />
      </Container>
    </Article>
  );
}
