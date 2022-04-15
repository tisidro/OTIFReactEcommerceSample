import React from "react";

function Origin({ formData, setFormData }) {
  return (
    <div class="origin">
      <div>
        <h1 class="has-text-centered mb-6">Origin</h1>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column ">
          <h2>Nombre de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Nombre De Origin"
            value={formData.nombreorigin}
            onChange={(event) =>
              setFormData({ ...formData, nombreorigin: event.target.value })
            }
          />
        </div>

        <div class="column ">
          <h2>Calle de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Calle del origen"
            value={formData.calleorigin}
            onChange={(event) =>
              setFormData({ ...formData, calleorigin: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Colonia de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Colonia De Origin"
            value={formData.coloniaorigin}
            onChange={(event) =>
              setFormData({ ...formData, coloniaorigin: event.target.value })
            }
          />
        </div>

        <div class="column">
          <h2>Codigo postal del origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Codigo postal del origen"
            value={formData.codigopostalorigin}
            onChange={(event) =>
              setFormData({
                ...formData,
                codigopostalorigin: event.target.value,
              })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Cuidad de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Cuidad de origen"
            value={formData.cuidadorigin}
            onChange={(event) =>
              setFormData({ ...formData, cuidadorigin: event.target.value })
            }
          />
        </div>

        <div class="column">
          <h2>Estado de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Estado de origen"
            value={formData.estadoorigin}
            onChange={(event) =>
              setFormData({ ...formData, estadoorigin: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Correo electronico de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Correo electronico de origen"
            value={formData.correoeleorigin}
            onChange={(event) =>
              setFormData({ ...formData, correoelecorigin: event.target.value })
            }
          />
        </div>

        <div class="column">
          <h2>Numero de telefono de origen</h2>
          <input
            class="input"
            type="text"
            placeholder="Numero de telefono de origen"
            value={formData.numerotelefonoorigin}
            onChange={(event) =>
              setFormData({
                ...formData,
                numerotelefonoorigin: event.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Origin;
