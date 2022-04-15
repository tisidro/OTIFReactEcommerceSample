import React from "react";

function Destination({ formData, setFormData }) {
  return (
    <div class="destination">
      <div>
        <h1 class="has-text-centered mb-6">Destination</h1>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column ">
          <h2>Nombre de destino</h2>
          <input
            class="input dest-input"
            type="text"
            placeholder="Nombre De destino"
            value={formData.nombredestino}
            onChange={(event) =>
              setFormData({ ...formData, nombredestino: event.target.value })
            }
          />
        </div>

        <div class="column ">
          <h2>Calle del destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Calle del destino"
            value={formData.calledestino}
            onChange={(event) =>
              setFormData({ ...formData, calledestino: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column ">
          <h2>Colonia del destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Colonia del destino"
            value={formData.coloniadestino}
            onChange={(event) =>
              setFormData({ ...formData, coloniadestino: event.target.value })
            }
          />
        </div>

        <div class="column">
          <h2>Codigo postal del destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Codigo postal del destino"
            value={formData.codigodestino}
            onChange={(event) =>
              setFormData({ ...formData, codigodestino: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Cuidad de destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Cuidad de destino"
            value={formData.cuidaddestino}
            onChange={(event) =>
              setFormData({ ...formData, cuidaddestino: event.target.value })
            }
          />
        </div>

        <div class="column ">
          <h2>Estado de destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Estado de destino"
            value={formData.estadodestino}
            onChange={(event) =>
              setFormData({ ...formData, estadodestino: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Correo electronico de destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Correo electronico de destino"
            value={formData.correoelecdestino}
            onChange={(event) =>
              setFormData({
                ...formData,
                correoelecdestino: event.target.value,
              })
            }
          />
        </div>

        <div class="column">
          <h2>Numero de telefono de destino</h2>
          <input
            class="input"
            type="text"
            placeholder="Numero de telefono de destino"
            value={formData.numerotelefonodestino}
            onChange={(event) =>
              setFormData({
                ...formData,
                numerotelefonodestino: event.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
