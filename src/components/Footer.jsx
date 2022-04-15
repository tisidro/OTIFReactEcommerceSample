import React from "react";

function Footer() {
  return (
    <div className="footer section px-4 py-6">
      <div class="footer-logo">
        <a href="/" class="navbar-brand">
          <img
            src="img/white-logo-long.png"
            alt="Logo"
            height={60}
            width={180}
          />
        </a>
      </div>

      <div className="menus mt-1">
        <div class="">
          <h3 class="">OTIF</h3>
          <ul class="sap-f">
            <li>
              <a href="/">- Conocenos</a>
            </li>
            <li>
              <a href="/">- Empleo</a>
            </li>
            <li>
              <a href="/">- Blog</a>
            </li>
            <li>
              <a href="/">- Medios</a>
            </li>
          </ul>
        </div>

        <div class="">
          <h3 class="">Envios</h3>
          <ul class="sap-f">
            <li>
              <a class="is-size-6-mobile" href="/envios-info">
                - Envíos
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=a">
                - Envíos a
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=mexico">
                - Envíos a Mexico
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=baratos">
                - Envíos baratos
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=de-paquetes">
                - Envíos de paquetes
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=economicos">
                - Envíos economicos
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=gdl">
                - Envíos Guadalajara
              </a>
            </li>
            <li>
              <a
                class="is-size-6-mobile"
                href="/envios-info?mod=internacionales"
              >
                - Envíos internacionales
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=mty">
                - Envíos Monterrey
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=nacionales">
                - Envíos nacionales
              </a>
            </li>
            <li>
              <a class="is-size-6-mobile" href="/envios-info?mod=seguros">
                - Envíos seguros
              </a>
            </li>
            <li>
              <a
                class="is-size-6-mobile"
                href="/envios-info?mod=guias-prepagadas"
              >
                - Guias prepagadas
              </a>
            </li>
            <li>
              <a
                class="is-size-6-mobile"
                href="/envios-info?mod=mensajeria-express"
              >
                - Mensajeria express
              </a>
            </li>
            <li>
              <a
                class="is-size-6-mobile"
                href="/envios-info?mod=paqueteria-economica"
              >
                - Paqueteria economica
              </a>
            </li>
            <li>
              <a
                class="is-size-6-mobile"
                href="/envios-info?mod=paqueterias-en-mexico"
              >
                - Paqueterias en Mexico
              </a>
            </li>
          </ul>
        </div>

        <div class="">
          <h3 class="block-title">Producto</h3>
          <ul class="sap-f">
            <li class="is-size-6-mobile">
              <a href="/terminos">- Términos y Condiciones</a>
            </li>
            <li class="is-size-6-mobile">
              <a href="/">- Empresas</a>
            </li>
            <li class="is-size-6-mobile">
              <a href="/">- Cotizador</a>
            </li>
            <li class="is-size-6-mobile">
              <a href="/">- Seguridad</a>
            </li>
            <li class="is-size-6-mobile">
              <a href="/">- Porque OTIF?</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="site-info text-center">
        <p>
          Desarrollado por <a href="https://otif.mx">OTIF</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
