import React, { useState, useEffect } from "react";
import "./App.css";
import { MainContext } from "./DataContext";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";

function App() {
  const [font, setFont] = React.useState("Inter");
  const [theme, setTheme] = React.useState("Darken");

  const fonts = [
    {
      name: "Inter",
      value: 10,
    },
    {
      name: "Roboto",
      value: 20,
    },
    {
      name: "Sans-Serif",
      value: 30,
    },
  ];

  const data = {
    fonts,
    font,
    setFont,
    theme,
    setTheme,
  };

  return (
    <MainContext.Provider value={data}>
      <div className={`Global ${theme}`}>
        <Head />
        <Main />
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
