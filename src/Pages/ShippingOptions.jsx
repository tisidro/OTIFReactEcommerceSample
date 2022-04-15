import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

function ShippingOptions() {
  return <div>hello from shippingoptions</div>;
  // const [options, setOptions] = useState({
  //   currentOptions: {},
  // });

  // useEffect(() => {
  //   fetch()
  //     .then((response) => response.json())
  //     .then((json) => setOptions());
  // }, []);

  // return (
  //   <section class="section">
  //     <div class="mt-5">
  //       <h1 class="has-text-centered ship-title">
  //         Choose Your Shipping Option
  //       </h1>
  //     </div>

  //     <div class="is-flex mt-4 ship-opt">
  //       <div class="box shipping-option button cheap-opt is-active">
  //         <h1 class="has-text-centered">Cheapest</h1>
  //         <img src="img/money-bag.png" alt="fast" />
  //       </div>

  //       <div class="box button shipping-option">
  //         <h1 class="has-text-centered">Fastest</h1>
  //         <img src="img/fast-box.png" alt="fast" />
  //       </div>

  //       <div class="box button shipping-option">
  //         <h1 class="has-text-centered">Sponsored</h1>
  //       </div>
  //     </div>

  //     <button class="button options-btn is-primary" type="submit">
  //       Checkout
  //     </button>
  //   </section>
  // );
}

export default ShippingOptions;
