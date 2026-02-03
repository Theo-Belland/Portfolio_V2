
import { Link } from "react-router-dom";
export default function Navbar() {

    return(
        <nav className="navbar">
            <div className="navbar_content">
                <ul className="">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/projet">Projet</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
