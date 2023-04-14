//import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function OrderPage() {

  return (
    <>
            <Header />
            <Nav />
            <div className="text">
                <h2>Order Online</h2>
                <p>Order delivery food with Uber and Lyft here!</p>
            </div>
            <Footer />
    </>
  )
}

export default OrderPage