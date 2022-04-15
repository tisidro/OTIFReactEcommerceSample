import React from "react";

function SignUp() {
  return (
    <div className="signUp">
      <h2 class="section-title">Regístrate!</h2>
      <div class="desc-text">
        <p>Aprovecha los beneficios de OTIF al crear una cuenta con nosotros</p>
      </div>

      <div class="col-lg-6 col-md-12">
        <form id="contactForm" action="/acceso/register" method="post">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  id="username"
                  placeholder="Usuario"
                  required
                  data-error="Ingresa tu usuario"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="full_name"
                  id="full_name"
                  placeholder="Nombre Completo"
                  required
                  data-error="Ingresa tus nombres"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  required
                  data-error="Ingresa tu correo electonico"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  required
                  data-error="Ingresa tu contraseña"
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="submit-button">
                <button class="btn btn-common" id="submit" type="submit">
                  Regístrate
                </button>
                <div id="msgSubmit" class="h3 hidden"></div>
                <div class="clearfix"></div>
              </div>

              <div class="col-lg-5 col-md-12">
                <img src="img/camion.png" alt="logistics" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
