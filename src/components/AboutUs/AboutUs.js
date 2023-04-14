import './AboutUs.css';
import image1 from '../../assets/olive-oil-g7c262f59c_1280.jpg';
import image2 from '../../assets/tomatoes-ga9394b978_1280.jpg';

function AboutUs() {
    return (

<section className="about-us">
        <div className="about-text-wrapper">
        <h1 className="about-h1">Little Lemon</h1>
        <h2 className="about-h2">Chicago</h2>
        <p className="about-text">The brothers named their restaurant "Little Lemon," inspired by the vibrant citrus fruit that is ubiquitous in Mediterranean cuisine. With a menu that features fresh, locally-sourced ingredients and a focus on traditional cooking methods, Little Lemon quickly gained a loyal following.</p> 
        <p>The restaurant's inviting atmosphere and charming decor, complete with colorful tiles and cozy seating, transport diners to a cozy corner of the Mediterranean. Whether savoring a classic Greek salad or indulging in a rich and hearty lamb tagine, every dish at Little Lemon is crafted with care and passion.</p>
        <p>With its unique blend of flavor, ambiance, and exceptional service, Little Lemon has become a must-visit destination for anyone seeking a taste of the Mediterranean in the heart of Chicago.</p>
        </div>

        <div className="double-image">
                <img className="about-image-1" src={image1} alt="Little Lemon restaurant cuisine 1" />
                <img className="about-image-2" src={image2} alt="Little Lemon restaurant cuisine 2" />
        </div>
      </section>
    )
}

export default AboutUs;