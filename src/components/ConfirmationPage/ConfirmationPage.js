import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function ConfirmationPage() {
  return (
    <div>
      <Header />
      <Nav />
      <h1 style={{ textAlign: "center", marginTop: "150px", fontSize: "50px" }}>
        Thank you for your reservation. We look forward to your patronage!
      </h1>
      <Footer />
    </div>
  );
}

export default ConfirmationPage;