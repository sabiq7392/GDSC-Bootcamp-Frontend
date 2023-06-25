import Footer from '../components/organisms/Footer';
import Hero from '../components/templates/Hero';
import Navbar from '../components/organisms/Navbar';
import Global from '../components/templates/Global';
import Provinces from '../components/templates/Provinces';
import CovidForm from '../components/templates/CovidForm';
import data, { ProvincesData } from '../utils/constants/provinces';
import { useState } from 'react';
import type { ReactElement } from "react";

function Main(): ReactElement {
  const [covidProvinces, setCovidProvinces] = useState<ProvincesData>(data.provinces);

  covidProvinces.sort((a, b) => {
    const provinceA = a.kota.toLowerCase();
    const provinceB = b.kota.toLowerCase();

    if (provinceA < provinceB) {
      return -1;
    }

    if (provinceA > provinceB) {
      return 1;
    }

    return 0;
  });

  console.log({ covidProvinces });


  return (
    <main>
      <Hero />
      <Global />
      <Provinces covidProvinces={covidProvinces} />
      <CovidForm covidProvinces={covidProvinces} setCovidProvinces={setCovidProvinces}  />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
