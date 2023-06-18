// import logo from './logo.svg';
// import './App.css';
// import Hello from "./components/Hello";
// import Tambah from './components/Tambah';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <h1 class="text-4xl font-bold underline">
        Hello world!
      </h1>
    </div>  
  );
}

export default App;
