import { useParams } from "react-router-dom";
import { vinos } from "../data/vinos";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const producto = vinos.find((v) => v.id === Number(id));

  if (!producto) {
    return <h2 style={{ textAlign: "center", marginTop: "80px" }}>Producto no encontrado</h2>;
  }

  return (
    <section className="product">
      <div className="product-container">

        {/* Imagen */}
        <div className="product-image-wrapper">
          <img src={producto.imagen} alt={producto.nombre} className="product-image" />
        </div>

        {/* Info */}
        <div className="product-info">
          <h1 className="product-title">{producto.nombre}</h1>
          <p className="product-price">{producto.precio}</p>

          <p className="product-description">{producto.descripcion}</p>

          <div className="product-details">
            <p><strong>Origen:</strong> {producto.origen}</p>
            <p><strong>Añada:</strong> {producto.anada}</p>
            <p><strong>Alcohol:</strong> {producto.alcohol}</p>
            <p><strong>Maridaje:</strong> {producto.maridaje}</p>
          </div>

          <a href="/contacto" className="product-button">
            Consultar disponibilidad
          </a>
        </div>

      </div>
    </section>
  );
}