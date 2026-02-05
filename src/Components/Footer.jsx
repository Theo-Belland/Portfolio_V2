/*import {link} from "react-router-dom";*/
import "../Styles/Components/_Footer.scss";
import { FaRegUserCircle } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="footer">
           <p>© 2026 Théo Belland. Tous droits réservés.</p>
           
        <div className="admin-icon">
          <FaRegUserCircle />
        </div>

        </footer>
    );
}