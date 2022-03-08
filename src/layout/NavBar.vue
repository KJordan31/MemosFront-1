<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle">
      <i class="hamburger align-self-center"></i>
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <router-link
                class="nav-icon dropdown-toggle"
                to="/"
                id="home"
              >
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

              <b-nav-item-dropdown>
                <img
                  src="../../public/assets/img/avatars/avatar-6.png"
                  class="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />
                <em v-show="usuario">{{usuario.nombre}}</em>

                
              </b-nav-item-dropdown>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
     usuario:[]
      
    };
  },

  
  created:function() {
    var datosLocal = JSON.stringify(localStorage.getItem('user-info'));
    if (datosLocal == null) {
      this.usuario = []
    }else{
    
      this.usuario = datosLocal
    }
    console.log((datosLocal))
   
},

}
</script>
