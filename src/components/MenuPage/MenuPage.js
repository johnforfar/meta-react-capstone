//import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MenuPage() {

  return (
    <>
            <Header />
            <Nav />
            <div className="text">
                <h2>Menu</h2>
                <p>Read the menu here.</p>
            </div>
            <Footer />
    </>
  )
}

export default MenuPage