import React, { useState } from "react";
import Origin from "../components/Origin";
import Destination from "../components/Destination";
import Metrics from "../components/Metrics";

function ShippingInfo() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    nombreorigin: "",
    calleorigin: "",
    coloniaorigin: "",
    codigopostalorigen: "",
    cuidadorigin: "",
    estadoorigen: "",
    correoelecorigen: "",
    numerotelefonoorigin: "",
    nombredestino: "",
    calledestino: "",
    coloniadestino: "",
    codigopostaldestino: "",
    cuidaddestino: "",
    estadodestino: "",
    correoelecdestino: "",
    numerotelefonodestino: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    contendiopaquete: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function goNextBtn() {
    if (page === 3) return;
    setPage(page + 1);
  }

  function goPrevBtn() {
    if (page === 1) return;
    setPage(page - 1);
  }

  return (
    <section class="section">
      <div class="shipping-form is-flex">
        <form onSubmit={handleSubmit}>
          <div class="card columns shipping-card">
            <div class="column is-half">
              <div>
                {page === 1 && (
                  <Origin formData={formData} setFormData={setFormData} />
                )}
                {page === 2 && (
                  <Destination formData={formData} setFormData={setFormData} />
                )}
                {page === 3 && (
                  <Metrics formData={formData} setFormData={setFormData} />
                )}
              </div>

              <div class="mt-5  is-flex">
                <button
                  onClick={goPrevBtn}
                  class="button  prev-btn card-btn is-primary"
                >
                  Prev
                </button>
                {page !== 3 && (
                  <button
                    onClick={goNextBtn}
                    class="button  next-btn card-btn is-primary"
                  >
                    Next
                  </button>
                )}
                {page === 3 && (
                  <button
                    onClick={goNextBtn}
                    class="button  next-btn card-btn is-primary"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>

            <div class="for-visual column  is-half">
              <img
                src="img/white-logo-short.png"
                alt="logo"
                width={100}
                height={80}
              />
              <div class="mt-4">
                <img
                  class="threed-box"
                  src="img/cube.png"
                  alt="cube"
                  width={400}
                  height={100}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ShippingInfo;
