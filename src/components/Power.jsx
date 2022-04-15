import React from "react";

function Power() {
  return (
    <section class="section">
      <div className="power-sec columns">
        <div class="power-info column">
          <h3 class="is-size-5-mobile">OTIF te da el poder</h3>
          <p class="is-size-7-mobile">
            Con OTIF, las empresas más ambiciosas de cualquier parte del mundo
            consiguen enviar todo tipo de productos sin complicaciones, sin
            fronteras y de manera programable. Nuestros proveedores están
            repartidos estratégicamente para brindarte el mejor servicio.
          </p>
          <p class="is-size-7-mobile">
            Ahorra tiempo, reduce costos y envía de manera más inteligente con
            OTIF.
          </p>
          <ul>
            <li class="is-size-7-mobile">
              Contamos con más de 690 proveedores
            </li>
            <li class="is-size-7-mobile">
              Juntos exceden 76 billones de paquetes al año
            </li>
            <li class="is-size-7-mobile">Con un crecimiento del 27% anual</li>
          </ul>
        </div>

        <div class="power-img column is-two-fifths">
          <img src="img/globe.png" class="img-fluid" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Power;
