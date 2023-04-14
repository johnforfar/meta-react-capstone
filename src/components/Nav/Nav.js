import './Nav.css';
import menuBurger from "../../assets/menu-burger.png";
import menuClose from "../../assets/menu-close.png";
import NavMenu from "../Nav/NavMenu";
import { useState } from "react";
import logoImage from '../../../src/assets/Logo.svg';

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
      setNavbarOpen(!navbarOpen);
    }
    return (
    <nav className="main-nav">
        <nav className="burger">
            <img src={logoImage} alt="Little Lemon logo" className="nav-image" />

            <button className="burger-icon" onClick={handleToggle}>
                <img src={navbarOpen ? menuClose : menuBurger} alt="Navigation Bar" />
            </button>
        </nav>
 
        <NavMenu device="desktop" />
        {navbarOpen ? <NavMenu device="mobile" /> : ""}
        
    </nav>
    );
};

export default Nav;