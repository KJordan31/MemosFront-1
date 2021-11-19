<template>
    <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <router-link to="/" class="sidebar-brand" >
                        <span class="align-middle">Sitema Memorandum</span>
                    </router-link>
                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li class="sidebar-item active">
                            <router-link class="sidebar-link" to="/">
                                  <i class="fas fa-home align-middle"></i>
                                  <span class="align-middle">Inicio</span>
                            </router-link>
                        </li>

                        <li class="sidebar-item">
                            <router-link class="sidebar-link" to="/bandeja">
                                <i class="fas fa-inbox"></i> <span class="align-middle">Bandeja</span>
                            </router-link>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="pages-sign-in.html">
                                <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">Sign In</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="Buscar.html">
                                <i class="align-middle" data-feather="search"></i> <span class="align-middle">Buscar</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="pages-blank.html">
                                <i class="align-middle" data-feather="settings"></i> <span class="align-middle">Configuración</span>
                            </a>
                        </li>

                        <li class="sidebar-header">
                            Administración
                        </li>

                        <li class="sidebar-item">
                            <router-link class="sidebar-link" to="/administracion/catalogo">
                                <i class="align-middle" data-feather="square"></i> <span class="align-middle">Catalogos</span>
                            </router-link>
                        </li>

                        <li class="sidebar-item">
                            <router-link class="sidebar-link" to="/">
                                <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Usuarios</span>
                            </router-link>
                        </li>
                      
                    </ul>

                </div>
    </nav>
</template>



<script>
export default {
    name: 'SideNav'
}
</script>
