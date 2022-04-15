import React, { useState } from "react";

function Search() {
  const [landingData, setlandingData] = useState({
    origin: "",
    destination: "",
    height: "",
    weight: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/shipping/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(landingData),
    }).then(() => {
      console.log(landingData);
    });
  }
  return (
    <section class="section">
      <div className="search-box mt-6 mb-6">
        <div class="box box-grad search-cont">
          <div class="container">
            <form onSubmit={handleSubmit}>
              <div class=" columns is-flex-direction-row search-sec ">
                <div className="column px-0 search-in">
                  <span class="icon-text">
                    <span>
                      <i class="fa-solid fa-fw fa-map-location-dot"></i>
                    </span>
                    <span>
                      <h4>Origin</h4>
                    </span>
                  </span>
                  <input
                    class="input is-small has-text-grey"
                    type="text"
                    placeholder="Origin"
                    value={landingData.origin}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        origin: event.target.value,
                      })
                    }
                  ></input>
                </div>

                <div className="control has-icons-left has-icons-right column px-0 search-in">
                  <span class="icon-text">
                    <span>
                      <i class="fa-solid fa-fw fa-location-dot"></i>{" "}
                    </span>
                    <span>
                      <h4>Destination</h4>
                    </span>
                  </span>

                  <input
                    class="input is-small has-text-grey"
                    type="text"
                    placeholder="Destination"
                    value={landingData.destination}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        destination: event.target.value,
                      })
                    }
                  />
                </div>

                <div className="column px-0 search-in">
                  <span class="icon-text">
                    <span>
                      <i class="fa-solid fa-fw fa-ruler-vertical"></i>
                    </span>
                    <span>
                      <h4>Height</h4>
                    </span>
                  </span>
                  <input
                    class="input is-small has-text-grey height-input"
                    type="text"
                    placeholder="Height"
                    value={landingData.height}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        height: event.target.value,
                      })
                    }
                  ></input>
                </div>

                <div className="column px-0 search-in">
                  <span class="icon-text">
                    <span>
                      <i class="fa-solid fa-fw fa-weight-hanging"></i>
                    </span>
                    <span>
                      {" "}
                      <h4>Weight (lbs)</h4>
                    </span>
                  </span>
                  <input
                    class="input is-small has-text-grey weight-input"
                    type="text"
                    placeholder="Weight"
                    value={landingData.weight}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        weight: event.target.value,
                      })
                    }
                  ></input>
                </div>

                <div className="column px-0 search-in">
                  <span class="icon-text">
                    <span>
                      <i class="fa-solid fa-calendar fa-fw"></i>
                    </span>
                    <span>
                      <h4>Date</h4>
                    </span>
                  </span>
                  <input
                    class="input is-small has-text-grey number-in"
                    type="text"
                    placeholder="Date"
                  ></input>
                </div>

                <div class="control mt-6">
                  <button
                    type="submit"
                    class="button is-primary has-icon freight-search"
                  >
                    <span>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
