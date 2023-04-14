//import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function LoginPage() {

  return (
    <>
            <Header />
            <Nav />
            <div className="text">
                <h2>Login</h2>
                <p>Log into your Little Lemon account here.</p>
            </div>
            <Footer />
    </>
  )
}

export default LoginPage