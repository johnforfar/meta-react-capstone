import logoImage from '../../../src/assets/Logo.svg';

function Header() {
    return (
        <header>
            <meta name="description" content="Little Lemon"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="Little Lemon"/>
            <meta name="og:image" content=""/>
            <img src={logoImage} alt="Little Lemon" height="" />

            Header

        </header>
    );
};

export default Header;