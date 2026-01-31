import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Columna 1 */}
        <div className="footer-section">
          <h3 className="footer-title">La Cava del Boulevard</h3>
          <p className="footer-description">
            Un espacio dedicado a los vinos que cuentan historias.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Explorar</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contacto</h4>
          <p className="footer-text">Boulevard San Juan, Córdoba</p>
          <p className="footer-text">351-000-0000</p>
          <p className="footer-text">lacavadelboulevard@gmail.com</p>
        </div>

        {/* Columna 4 */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Redes</h4>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} La Cava del Boulevard — Elegancia en cada copa</p>
      </div>
    </footer>
  );
}