// import logo from './logo.svg';
// import './App.css';
// import Hello from "./components/Hello";
// import Tambah from './components/Tambah';
// import Header from './components/header/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import { useEffect, useState } from 'react';
// import BelajarState from './components/BelajarState';
// import BelajarUseEffect from './components/BelajarUseEffect';
// import BelajarStyledComponent from './components/BelajarStyledComponent';

import { useState } from "react";
import Button from 'react-bootstrap/Button';

function App() { 
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      {/* <button onClick={function() { setTotal(total + 1) }}>Counter</button>
      <p>Total: {total}</p> */}

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem" }}>
        <div>
          <h1>COVID </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, minus? Maxime adipisci ratione laborum culpa ab! Voluptates iste vel vero, quae, obcaecati, iusto sint quaerat quibusdam praesentium eos reiciendis sed!
          Amet eaque vero porro inventore, voluptates neque recusandae molestiae nihil cupiditate voluptate ex ea aliquid. Cupiditate aperiam, exercitationem asperiores id distinctio impedit at nulla maxime obcaecati animi. Quidem, quod qui.
          Provident quod ipsum quaerat, est rem, saepe molestiae ipsa praesentium, mollitia consequuntur quae quisquam sequi nisi ratione officia nesciunt sapiente natus reiciendis reprehenderit aperiam. Dolore eum sed minima molestias temporibus!
          Incidunt maiores laborum iusto. Dignissimos sequi natus ea, earum sit consequatur. Excepturi rerum possimus in odit asperiores quis soluta perspiciatis, fuga optio vitae impedit fugit praesentium. Commodi similique debitis eius.
          Modi quae deleniti possimus minus, itaque magni incidunt error cupiditate iste reprehenderit pariatur atque laudantium harum, inventore nostrum exercitationem ipsam distinctio praesentium culpa perferendis ipsa asperiores. Iste voluptate autem placeat.</p>
        </div>
        <img src="https://awsimages.detik.net.id/community/media/visual/2022/11/03/gambar-dekoratif-2.jpeg?w=650&q=80" />
      </div>
    </div>  
  );
}

export default App;
