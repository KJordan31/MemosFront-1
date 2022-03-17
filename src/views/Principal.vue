<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="container bootstrap snippets bootdey">
      <div class="col-md-12">
        <h2 class="text-dark">
          <i class="fas fa-home align-middle"></i>
          Inicio
        </h2>
        <hr />
        <div class="container" v-if="usuario.super_Usuario != true">
          <div class="row">
            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/bandeja/entrada">
                      <div class="col-xs-6">
                        <i class="fas fa-inbox fa-5x"></i>
                      </div>
                      <div class="col-xs-6 text-right">
                        <h5 class="card-title">Bandeja</h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-1"></div>

            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/configuracion">
                      <div class="col-xs-6 position-relative">
                        <i class="fas fa-user-cog fa-5x"></i>
                        <div class="col-xs-6 text-right">
                          <h5 class="card-title">Configuración de Usuario</h5>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" v-else>
          <div class="row">
            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/bandeja/entrada">
                      <div class="col-xs-6">
                        <i class="fas fa-inbox fa-5x"></i>
                      </div>
                      <div class="col-xs-6 text-right">
                        <h5 class="card-title">Bandeja</h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-1"></div>

            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/memorandum">
                      <div class="col-xs-6">
                        <i class="fas fa-file-alt fa-5x"></i>
                      </div>
                      <div class="col-xs-6 text-right">
                        <h5 class="card-title">Nuevo</h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/administracion/catalogo">
                      <div class="col-xs-6">
                        <i class="fas fa-tools fa-5x"></i>
                      </div>
                      <div class="col-xs-6 text-right">
                        <h5 class="card-title">Administración</h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-1"></div>

            <div class="col-lg-5">
              <div class="card text-center" style="background-color: #e3f2fd">
                <div class="card-stacked">
                  <div class="card-body">
                    <router-link to="/configuracion">
                      <div class="col-xs-6 position-relative">
                        <i class="fas fa-user-cog fa-5x"></i>
                        <div class="col-xs-6 text-right">
                          <h5 class="card-title">Configuración de Usuario</h5>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementoActual: 1,
      usuario: {
        super_Usuario: true,
      },
    };
  },

  created: function () {
    var data = JSON.parse(localStorage.getItem("user-info"));
    if (data != null) {
      this.usuario.super_Usuario = data.super_Usuario;
      console.log(this.usuario.super_Usuario);
    } else {
      console.log("TODO: Regresar a pagina de LOGUEO");
    }
  },
};
</script>

<style></style>
