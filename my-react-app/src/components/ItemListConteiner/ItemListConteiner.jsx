import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";


const ItemListContainer = ({ mensaje }) => {
return (
    <section style={{ padding: "20px", textAlign: "center" }}>
    <h1>{"Nuestra tienda"} - {mensaje}</h1>
    </section>
);
};

export default ItemListContainer;
