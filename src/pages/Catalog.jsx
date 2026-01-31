import "./Catalog.css";
import { Link } from "react-router-dom";

export default function Catalog() {
  const productos = [
    {
      id: 1,
      nombre: "Malbec Reserva",
      imagen: "/lacavadelboulevard/vino1.png",
      precio: "$12.500",
    },
    {
      id: 2,
      nombre: "Cabernet Sauvignon",
      imagen: "/lacavadelboulevard/vino2.png",
      precio: "$15.900",
    },
    {
      id: 3,
      nombre: "Blend Premium",
      imagen: "/lacavadelboulevard/vino3.png",
      precio: "$18.200",
    },
  ];

  return (
    <section className="catalog">
      <h1 className="catalog-title">Nuestro Catálogo</h1>

      <div className="catalog-grid">
        {productos.map((p) => (
          <div key={p.id} className="card">
            <div className="card-img-container">
              <img src={p.imagen} alt={p.nombre} className="card-img" />
              <div className="card-overlay"></div>
            </div>

            <div className="card-info">
              <h3 className="card-name">{p.nombre}</h3>
              <p className="card-price">{p.precio}</p>

              <Link to={`/producto/${p.id}`} className="card-button">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}