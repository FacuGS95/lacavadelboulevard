import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* LOGO */}
                <Link to="/" className="navbar-logo">
                  <img src="/lacavadelboulevard/logo.png" alt="La Cava del Boulevard" className="logo-round" />
                </Link>

                {/* LINKS */}
                <div className="navbar-links">
                    <NavLink to="/" className="nav-item">Inicio</NavLink>
                    <NavLink to="/catalogo" className="nav-item">Catálogo</NavLink>
                    <NavLink to="/nosotros" className="nav-item">Nosotros</NavLink>
                    <NavLink to="/contacto" className="nav-item">Contacto</NavLink>
                </div>
            </div>
        </nav>
    );
}