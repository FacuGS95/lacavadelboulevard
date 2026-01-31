import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <h1 className="contact-title">Contacto</h1>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2 className="contact-heading">Estamos para ayudarte</h2>
          <p className="contact-text">
            Si querés consultar disponibilidad, pedir recomendaciones o coordinar una compra,
            escribinos y te respondemos a la brevedad.
          </p>

          <div className="contact-details">
            <p><strong>Dirección:</strong> Boulevard San Juan, Córdoba</p>
            <p><strong>Teléfono:</strong> 351-000-0000</p>
            <p><strong>Email:</strong> lacavadelboulevard@gmail.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" required />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Escribí tu consulta..." rows="5" required></textarea>
          </div>

          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>
        </form>

      </div>

    </section>
  );
}