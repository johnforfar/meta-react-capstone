import chefRestaurant from '../../assets/chef-gb60d0f208_1920.jpg';
import { useNavigate } from 'react-router-dom';
import './Intro1.css';

function Intro1() {
    const navigate = useNavigate();
    function makeReservation() {
        navigate('/reservations');
    }

        return (
        <section className="intro-section">
        <div className="intro-container">
          <h1>Little Lemon</h1>
          <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with modern twist.</p>
          <button onClick={makeReservation} aria-label="Go to reservation page">Reserve a Table</button>
        </div>
        <div className="image-container">
          <img src={chefRestaurant} alt="Chef in restaurant" className="table-image" />
        </div>
      </section>
        );
    };

export default Intro1;