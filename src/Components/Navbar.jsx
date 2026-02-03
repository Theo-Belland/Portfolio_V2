import { Link } from "react-router-dom";
import '../Styles/Components/_Navbar.scss';
import { FaGithub, FaFacebook, FaLinkedin  } from "react-icons/fa";

export default function Navbar() {

    return(
        <nav className="navbar">
            <div className="navbar_content">
                <div className="logo_navbar">
                    <h2>Mon Portfolio</h2>
                </div>
                <div className="separator"></div>
                <ul className="">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/projet">Projet</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="separator"></div>
                <div className="Social">
                <a
                    href="https://github.com/Theo-Belland"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61582568237780"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.linkedin.com/in/theo-belland-94b27a1aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                </div>
            </div>
        </nav>
    );
}
