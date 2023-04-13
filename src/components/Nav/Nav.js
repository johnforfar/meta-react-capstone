import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Articles</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><Link to="/reservations">Reserve Table</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;