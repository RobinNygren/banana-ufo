import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul className="NavLinks">
                <li><a href="/">Homebase</a></li>
                <li><a href="/about">Spaceport</a></li>
                <li><a href="/services">Solar Systems</a></li>
                <li><a href="/contact">Comms Link</a></li>

            </ul>

        </nav>
    );
};

export default NavBar;