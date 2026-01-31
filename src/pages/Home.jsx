import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-texture"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h1 className="hero-title">La Cava del Boulevard</h1>
        <p className="hero-subtitle">
          Donde cada botella cuenta una historia.
        </p>

        <a href="/catalogo" className="hero-button">
          Explorar catálogo
        </a>
      </div>
    </section>
  );
}