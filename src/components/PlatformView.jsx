import React from "react";

function PlatformView() {
  return (
    <div>
      <div className="showcase-img">
        <div class="row">
          <div class="">
            <img src="img/designer/visa-azul.png" class="img-fluid" alt="" />
          </div>
          <div class="row">
            <div class="">
              <img src="img/designer/iphone.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div class="">
          <div class="row">
            <div class="">
              <img src="img/designer/pago.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="">
              <img src="img/designer/web.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div class="">
          <img src="img/designer/terminal.png" class="img-fluid" alt="" />
        </div>
      </div>

      <div id="services" class="container-fluid right-position">
        <div class="row gradient-bg">
          <div class="showcase-text section-header">
            <h2 id="services" class="showcase-title is-size-6-mobile ">
              Una plataforma completamente diseñada para envíos de productos.
            </h2>
            <div class="desc-text is-size-7-mobile">
              <p>
                Reunimos a todas las paqueterías de México y el mundo. Los
                productos de OTIF facilitan la logística para tu empresa que
                opera en Internet y/o en persona
              </p>
              <p>
                Optimizamos y automatizamos todo tu proceso de envío. Desde un
                taco hasta el puesto de tacos entero, puedes enviar unidades
                completas, entrantes o salientes, B2B, B2C y C2B.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformView;
