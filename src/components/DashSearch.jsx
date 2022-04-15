import React from "react";

function DashSearch() {
  return (
    <div>
      <div class="columns quote-header">
        <div class="column">
          <h1 class="oat head-ship">Quote Shipping</h1>
        </div>
        <div class="column control has-icons-right">
          <input class="input dash-search" placeholder="Search"></input>
          <span class="icon is-small is-right">
            <i class="fas fa-magnifying-glass"></i>
          </span>
        </div>
        <div class="column">
          <div class="is-flex">
            <figure class="image is-32x32">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/32x32.png"
                alt="user-icon"
              />
            </figure>
            <h1 class="oat">Jessica Jones</h1>
            <span>
              <i class="fa-solid fa-arrow-down arrows"></i>
            </span>
          </div>

          <span>
            <i class="fa-solid fa-arrow-down"></i>
          </span>
        </div>
      </div>
      <h1 class="oat ship-message">
        Package delivery to any destination made easy and convienent
      </h1>
    </div>
  );
}

export default DashSearch;
