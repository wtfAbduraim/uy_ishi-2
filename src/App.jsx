import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Modalabu from "./Components/Modalabu/Modalabu";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Img/menu.svg"

function App() {
  const [modal, setmodal] = React.useState(false);

  return (
    <>
      <Header modal={modal} setmodal={setmodal} />
      <Modalabu modal={modal} setmodal={setmodal} />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
