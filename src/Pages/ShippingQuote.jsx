import React, { useState } from "react";
import DashSearch from "../components/DashSearch";
import Sidebar from "../components/Sidebar";

function ShippingQuote() {
  const [landingData, setlandingData] = useState({
    origin: "",
    destination: "",
    collectionDate: "",
    areaorigin: "",
    areaozip: "",
    areadestination: "",
    areadzip: "",
    valueofshipment: "",
    kindofproduct: "",
    weight: "",
    width: "",
    height: "",
    length: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const otifurl =
      "https://otif-server-dot-otif-mx.uc.r.appspot.com/shipping/quotes";

    fetch(otifurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ landingData }),
    }).then(() => {
      console.log(landingData);
    });
  }

  return (
    <section class="hero is-fullheight">
      <div className="columns">
        <Sidebar />
        <div class="column is-four-fifths">
          <DashSearch />
          <div className="box quote-box">
            <form onSubmit={handleSubmit}>
              <div className="columns">
                <div className="column">
                  <h1>Origin</h1>
                  <input
                    className="input"
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
                <div className="column">
                  <h1>Destination</h1>
                  <input
                    className="input"
                    type="text"
                    placeholder="Destination"
                    value={landingData.destination}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        destination: event.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="column">
                  <h1>Collection Date</h1>
                  <input
                    className="input"
                    type="text"
                    placeholder="Earliest date for collection"
                    value={landingData.collectionDate}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        collectionDate: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column is-three-fifths">
                      <h1>Area/Town</h1>
                      <input
                        className="input"
                        type="text"
                        placeholder="Area/Town"
                        value={landingData.areaorigin}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            areaorigin: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="column">
                      <h1>Zip Code</h1>
                      <input
                        className="input"
                        type="text"
                        placeholder="Zip Code"
                        value={landingData.areaozip}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            areaozip: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="columns">
                    <div className="column is-three-fifths">
                      <h1>Area/Town</h1>
                      <input
                        className="input"
                        type="text"
                        placeholder="Area/Town"
                        value={landingData.areadestination}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            areadestination: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="column">
                      <h1>Zip Code</h1>
                      <input
                        className="input"
                        type="text"
                        placeholder="Zip Code"
                        value={landingData.areadzip}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            areadzip: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h1>Value Of Shipment</h1>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter value of shipment"
                    value={landingData.valueofshipment}
                    onChange={(event) =>
                      setlandingData({
                        ...landingData,
                        valueofshipment: event.target.value,
                      })
                    }
                  ></input>
                </div>
              </div>
              <div className="columns">
                <div className="column is-two-thirds">
                  <h1>Shipment Information</h1>
                  <div className="columns">
                    <div className="column">
                      <input
                        className="input"
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
                    <div className="column">
                      <input
                        className="input"
                        type="text"
                        placeholder="Width"
                        value={landingData.width}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            width: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="column">
                      <input
                        className="input"
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
                    <div className="column">
                      <input
                        className="input"
                        type="text"
                        placeholder="Length"
                        value={landingData.length}
                        onChange={(event) =>
                          setlandingData({
                            ...landingData,
                            length: event.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="column is-flex">
                      <button class="button ">
                        <span class="icon is-small">
                          <i class="fa-solid fa-maximize"></i>
                        </span>
                      </button>
                      <button class="button x-btn">
                        <span class="icon is-small">
                          <i class="fa-solid fa-copy"></i>
                        </span>
                      </button>
                      <button class="button is-danger">
                        <span class="icon is-small">
                          <i class="fa-solid fa-xmark"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <h1>Kind Of Product</h1>
                  <input className="input"></input>
                </div>
              </div>
              <div className="columns">
                <div className="column is-two-thirds"></div>
                <div className="column">
                  <button type="submit" class="button">
                    Quote Shipment
                  </button>
                  <span></span>
                  <h1>
                    By continuing I confirm that i know and accept that<br></br>
                    Terms and Policies
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingQuote;
