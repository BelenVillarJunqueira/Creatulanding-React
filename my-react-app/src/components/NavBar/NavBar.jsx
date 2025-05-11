import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import styles from "../NavBar/styles.module.css";
import logo from '../../assets/logo.png'

const NavBar = () => {
return (
    <nav className={styles.nav}>
            <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
    </div>
    <div>El Viejo Manzano</div>
    <ul  style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
    </ul>
    <CartWidget />
    </nav>
);
};

export default NavBar;
