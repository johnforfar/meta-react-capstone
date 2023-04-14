import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AboutPage() {

  return (
    <>
            <Header />
            <Nav />
            <div className="text">
                <h2>About</h2>
                <p>Read more about Little Lemon here.</p>
            </div>
            <Footer />
    </>
  )
}

export default AboutPage