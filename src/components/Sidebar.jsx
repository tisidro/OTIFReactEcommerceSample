import React from "react";

function Sidebar() {
  return (
    <section>
      <div class="is-flex logo-clone">
        <img
          src="./img/2ndlogo.png"
          alt="Logo"
          class="ux-logo  has-text-centered is-flex "
        />
      </div>
      <div class=" ">
        <ul className="sidebar side-first">
          <li>Quote Shipping</li>
          <br></br>
          <li>Schedule Shipping</li>
          <br></br>
          <li>Analytics</li>
          <br></br>
          <li>Generate Points</li>
          <br></br>
          <li> Massive Shipments</li>
          <br></br>
          <li>Tracking</li>
        </ul>
        <hr class="line-bl"></hr>
        <ul class="sidebar">
          <li>History</li>
          <br></br>
          <li>Users</li>
          <br></br>
          <li>Integrations</li>
          <br></br>
          <li>Wallets</li>
          <br></br>
          <div class="">
            <li>
              Light Mode
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-moon"></i>
                </span>
                <span>
                  <i class="fas fa-brightness-low"></i>
                </span>
              </span>
            </li>
          </div>

          <br></br>
        </ul>
        <div class="side-btncon  has-text-centered">
          <button class="button is-medium sidebar-btn">Customer Service</button>
          <button class="button is-medium sidebar-btn dis-btn">
            Disconnect
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
