import React from "react";

function Nav() {
  return (
    <header>
      <nav
        class="navbar  nav-area is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <img src="/img/white-logo-long.png" alt="logo" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navigation"
            href="null"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navigation" class="navbar-menu my-4">
          <div class="navbar-end">
            <a href="index.html" class="navbar-item">
              Start
            </a>
            <a href="#sign-up" class="navbar-item">
              Sign Up
            </a>
            <a href="#services" class="navbar-item">
              Services
            </a>
            <button href="" class="button  mr-2 is-primary">
              LogIn
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
