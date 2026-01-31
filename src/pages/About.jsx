import "./About.css";

export default function About() {
  return (
    <section className="about">

      {/* HERO INTERNO */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <h1 className="about-title">Nuestra Historia</h1>
      </div>

      {/* CONTENIDO */}
      <div className="about-container">

        <div className="about-section">
          <h2 className="about-heading reveal">Pasión por el vino</h2>
          <p className="about-text">
            La Cava del Boulevard nació con la idea de crear un espacio donde cada
            botella cuente una historia. Seleccionamos vinos de bodegas que
            trabajan con dedicación, respeto por la tierra y una visión auténtica
            del terroir argentino.
          </p>
        </div>

        <div className="about-image-block reveal">
   <img src="/lacavadelboulevard/lacavadelboulevard.jpeg" alt="Vinos" className="about-image" />
</div>

        <div className="about-section">
          <h2 className="about-heading reveal">Nuestra filosofía</h2>
          <p className="about-text">
            Creemos en la experiencia. En el ritual de abrir una botella, en el
            aroma que anticipa el primer sorbo, en los momentos que se comparten.
            Por eso, cada vino que ofrecemos está cuidadosamente seleccionado.
          </p>
        </div>

        <div className="about-image-block">
          <img src="/lacavadelboulevard/lacavadelboulevard.jpeg" alt="Vinos" className="about-image" />
        </div>

        {/* VALORES */}
        <div className="about-values">
          <h2 className="about-heading reveal">Nuestros valores</h2>

          <div className="values-grid">
            <div className="value-card">
              <h3>Calidad</h3>
              <p>Trabajamos con bodegas que priorizan la excelencia en cada cosecha.</p>
            </div>

            <div className="value-card">
              <h3>Experiencia</h3>
              <p>Buscamos que cada cliente viva un momento único con cada botella.</p>
            </div>

            <div className="value-card">
              <h3>Pasión</h3>
              <p>El vino es cultura, historia y emoción. Lo vivimos todos los días.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}