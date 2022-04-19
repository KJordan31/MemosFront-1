<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle" @click="mostrar(SideNav)">
      <i class="hamburger align-self-center"></i>
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <router-link class="nav-icon dropdown-toggle" to="/" id="home">
            <div class="position-relative">
              <i class="fas fa-home"></i>
            </div>
          </router-link>
        </li>
        <!-- Boton de buscar -->
        <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">
            <li class="nav-item dropdown">
              <router-link
                class="nav-icon dropdown-toggle"
                to="/buscar"
                id="search"
              >
                <div class="position-relative">
                  <i class="fas fa-search" data-feather="search"></i>
                </div>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>

              <div class="dropdown">
                <img
                  src="../../public/assets/img/avatars/avatar-6.png"
                  class="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />
                <span class="align-middle">{{ usuario.nombre }} {{ usuario.apellidos }}</span>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>

  <!-- sidenav -->
  
  
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: " ",
        apellidos: " ",
      },
      ver: false
    };
  },
  created: function () {
    var data = JSON.parse(localStorage.getItem("user-info"));
    if (data != null) {
      this.usuario.nombre = data.nombre;
      this.usuario.apellidos = data.apellidos;
    } else {
      console.log("TODO: Regresar a pagina de LOGUEO");
    }
  },
  methods: {
    mostrar(SideNav){
       this.ver = true
    }
  },
};
</script>
