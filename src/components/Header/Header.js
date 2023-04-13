import logoImage from '../../../src/assets/Logo.svg';

import './Header.css';

function Header() {
    return (
        <header>
            <meta name="description" content="Little Lemon"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little Lemon"/>
            <meta name="og:image" content={logoImage}/>
            <img src={logoImage} alt="Little Lemon" height="auto" />
        </header>
    );
};

export default Header;