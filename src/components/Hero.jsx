import React from "react";
function Hero() {
  return (
    <section id="sign-up" class="section nav-area mt-6">
      <div className="columns is-full-mobile">
        <div className="hero-content column is-three-fifths ml-5-mobile">
          <div class="hero-text">
            <h2 class="hero-title is-size-3-mobile">
              SOFTWARE PARA EL MANEJO DE TUS ENVÍOS
            </h2>
            <p>
              Miles de empresas de todos los tamaños, desde startups hasta
              grandes empresas, usan el software y las API de OTIF para enviar
              mercancías y gestionar sus actividades logísticas en internet.
            </p>
            <div class="hero-button columns is-3-mobile is-flex-mobile">
              <a
                href="#contact"
                class="button hero-btn is-medium is-4 is-5-mobile is-primary column"
              >
                Regístrate
              </a>
              <a
                href="mailto:contacto@otif.mx"
                target="_blank"
                class="button column hero-btn is-4 is-medium is-white has-text-primary page-scroll"
                rel="noreferrer"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
        <div class=" column hero-img">
          <img src="img/inicio.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
