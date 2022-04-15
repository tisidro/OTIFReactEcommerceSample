import React from "react";

function Metrics({ formData, setFormData }) {
  return (
    <div class="destination">
      <div>
        <h1 class="has-text-centered mb-6">PackageInfo</h1>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column ">
          <h2>Length</h2>
          <input
            class="input dest-input"
            type="text"
            placeholder=""
            value={formData.length}
            onChange={(event) =>
              setFormData({ ...formData, length: event.target.value })
            }
          />
        </div>

        <div class="column ">
          <h2>Width</h2>
          <input
            class="input"
            type="text"
            placeholder=""
            value={formData.width}
            onChange={(event) =>
              setFormData({ ...formData, width: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column ">
          <h2>Height</h2>
          <input
            class="input"
            type="text"
            placeholder=""
            value={formData.height}
            onChange={(event) =>
              setFormData({ ...formData, height: event.target.value })
            }
          />
        </div>

        <div class="column">
          <h2>Weight</h2>
          <input
            class="input"
            type="text"
            placeholder=""
            value={formData.weight}
            onChange={(event) =>
              setFormData({ ...formData, weigth: event.target.value })
            }
          />
        </div>
      </div>

      <div class="columns is-flex is-flex-direction-row is-mobile">
        <div class="column">
          <h2>Contendio del paquete</h2>
          <input
            class="input addy"
            type="text"
            placeholder=""
            value={formData.contendiopaquete}
            onChange={(event) =>
              setFormData({ ...formData, contendiopaquete: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Metrics;
