
function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">CREATIVE DEVELOPER & DESIGNER</p>

        <h1>
          Hi, I'm <span>Alex Morgan.</span>
        </h1>

        <h2>I build digital experiences that matter.</h2>

        <p className="intro">
          I'm a creative developer and digital designer
          passionate about crafting beautiful, functional
          and engaging experiences for the modern web.
        </p>

        <div className="actions">
          <a href="/projects" className="btn primary">
            View My Work ↗
          </a>

          <a href="/contact" className="btn secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="orb"></div>
        <div className="art-card">
          DESIGN <span>×</span> CODE
        </div>
      </div>
    </section>
  );
}

export default Hero;
