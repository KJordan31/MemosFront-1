<template>
  <nav class="container" style="background-color: #e3f2fd;">
 

<h1 class="display-4">Memorandum</h1>
    <div class="container">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/bandeja/entrada"><i class="fa fa-inbox"></i> Recibidos<span
                            class="badge badge-danger"></span></router-link>
                            
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-rocket"></i> Enviados</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-star"></i> Destacados</a>
                </li>
               
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-trash-o"></i> Eliminados</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-bookmark"></i> Borradores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-inbox"></i> No Leidos <span
                            class="badge badge-danger">4</span></a>
                </li>
            </ul>
           
         </div>
    

</nav>

<router-view/>
</template>


<script>
export default {

}
</script>

