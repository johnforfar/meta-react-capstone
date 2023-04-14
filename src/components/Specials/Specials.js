import './Specials.css';
import greekSalad from '../../assets/salad-g5cf7c13cf_1920.jpg';
import greekPasta from '../../assets/spaghetti-gae81b2f0e_1920.jpg';
import dessert from '../../assets/cake-gf2acaac49_1920.jpg';
import { useNavigate } from 'react-router-dom';

function Specials() {
    
    const navigate = useNavigate();
    function viewMenu() {
        navigate('/menu');
    }

    return (

<section className="week-special">
        <h2>This Weeks Specials</h2>

        <div className="online-menu-div">
            <button className="online-menu-button" onClick={viewMenu} aria-label="See the online menu" style={{ marginLeft: "auto" }}>Online Menu</button>
        </div>

        <div className="specials-container">
          <div className="specials">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="name-price">
              <h3>Greek Salad</h3>
              <h3 className="price">$12.00</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className="specials">
            <img src={greekPasta} alt="Pasta" />
            <div className="name-price">
              <h3>Pasta</h3>
              <h3 className="price">$5.99</h3>
            </div>
            <p>Our Pasta is made from hand made pasta smeared with pesto and olive oil</p>
          </div>
          <div className="specials">
            <img src={dessert} alt="Fruit Dessert" />
            <div className="name-price">
              <h3>Fruit Dessert</h3>
              <h3 className="price">$5.00</h3>
            </div>
            <p>This comes straight form grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </div>
        </div>
      </section>
    )
}

export default Specials;