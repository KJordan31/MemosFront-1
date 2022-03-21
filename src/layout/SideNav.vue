<template>
  <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
      <router-link to="/" class="sidebar-brand">
        <span class="align-middle">Sistema Memorandum</span>
      </router-link>
      <ul class="sidebar-nav">
        <li class="sidebar-header"></li>
        <div v-if="usuario.super_Usuario != true">
          <li class="sidebar-item active">
            <router-link class="sidebar-link" to="/">
              <i class="fas fa-home align-middle"></i>
              <span class="align-middle">Inicio</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/bandeja/entrada">
              <i class="fas fa-inbox"></i>
              <span class="align-middle">Bandeja</span>
            </router-link>
          </li>

          

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/configuracion">
              <i class="fas fa-user-cog"></i>
              <span class="align-middle">Configuración</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/Login">
              <i class="fas fa-sign-out-alt"></i>
              <span class="align-middle">Salir</span>
            </router-link>
          </li>
        </div>

        <div v-else>
           <li class="sidebar-item active">
            <router-link class="sidebar-link" to="/">
              <i class="fas fa-home align-middle"></i>
              <span class="align-middle">Inicio</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/bandeja/entrada">
              <i class="fas fa-inbox"></i>
              <span class="align-middle">Bandeja</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/buscar">
              <i class="fas fa-search"></i>
              <span class="align-middle">Buscar</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/configuracion">
              <i class="fas fa-user-cog"></i>
              <span class="align-middle">Configuración</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/Login">
              <i class="fas fa-sign-out-alt"></i>
              <span class="align-middle">Salir</span>
            </router-link>
          </li>
          
          <li class="sidebar-header">Administración</li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/administracion/catalogo">
              <i class="fas fa-address-book" data-feather="square"></i>
              <span class="align-middle">Catálogos</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/usuario">
              <i class="fas fa-users" data-feather="check-square"></i>
              <span class="align-middle">Usuarios</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/memorandum">
              <i class="fas fa-file" data-feather="check-square"></i>
              <span class="align-middle">Crear Memorándum</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link class="sidebar-link" to="/plantilla">
              <i class="fas fa-file-signature" data-feather="check-square"></i>
              <span class="align-middle">Plantillas</span>
            </router-link>
          </li>

          
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideNav",
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
  methods: {},
};
</script>
