<template>
	<nav class="navbar navbar-expand navbar-light navbar-bg">
	    <a class="sidebar-toggle js-sidebar-toggle" >
	        <i class="hamburger align-self-center"></i>
	    </a>

	    <div class="navbar-collapse collapse">
	        <ul class="navbar-nav navbar-align">
	            <li class="nav-item dropdown">
	                <router-link class="nav-icon dropdown-toggle" to="/" id="alertsDropdown" data-bs-toggle="dropdown">
	                    <div class="position-relative">
	                        <i class="fas fa-home"></i>
	                        
	                    </div>
	                </router-link>
	                
	            </li>
	            <!-- Boton de buscar -->
	            <div class="navbar-collapse collapse">
	                <ul class="navbar-nav navbar-align">
	                    <li class="nav-item dropdown">
	                        <router-link class="nav-icon dropdown-toggle" to="/buscar" id="search">
	                            <div class="position-relative">
	                                <i class="fas fa-search" data-feather="search"></i>
                                </div>
							</router-link>
	                    </li>
	                    <li class="nav-item dropdown">
	                        <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
	                            data-bs-toggle="dropdown">
	                            <i class="align-middle" data-feather="settings"></i>
	                        </a>


                              
	                        <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
	                            toggLeable="dropdown" aria-haspopup="true" aria-expanded="false">
	                            <img src="../../public/assets/img/avatars/avatar-6.png" class="avatar img-fluid rounded me-1"
	                                alt="Charles Hall" /> <span class="text-dark">Kenneth Henriquez</span>
	                        </a>
	                        <!-- <div class="dropdown-menu dropdown-menu-end">
	                            <a class="dropdown-item" href="pages-profile.html"><i class="align-middle me-1"
	                                    data-feather="user"></i> Perfil</a>


	                            <a class="dropdown-item" href="pages-blank.html"><i class="align-middle me-1"
	                                    data-feather="settings"></i> Configuración</a>

	                            <div class="dropdown-divider"></div>
	                            <a class="dropdown-item" href="#">Log out</a>

						

							
	                        </div> -->
	                    </li>
	                </ul>
	            </div>
            </ul>
        </div>
	</nav>
</template>

<script>
export default {

}
</script>

