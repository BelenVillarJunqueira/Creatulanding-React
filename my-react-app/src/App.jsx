import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a El Viejo Manzano!" />
    </>
  );
};

export default App;
