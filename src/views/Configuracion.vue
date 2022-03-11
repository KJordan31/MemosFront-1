<template>
  
<div class="container bootstrap snippets bootdeys">
<div class="row">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal">
        <div class="panel panel-default">
          <div class="panel-body text-center">
           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-circle profile-avatar" alt="User avatar">
          </div>
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        </div>
        <div class="panel-body">                
        </div>
      </div>
      <div class="panel panel-default">        
        <div class="panel-body">
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title fst-italic">Seguridad</h4>
        </div>
        <form ref="ConfigurationForm" @submit.prevent="Editar">
        <div class="panel-body">
          <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Ingrese la contraseña original" required v-model="usuario.contraseña">
  
  <label for="floatingInput">Contraseña</label>
  
</div>
<div class="form-floating mb-3">
  <input  type="password" class="form-control " id="pass" name="clave1" placeholder="Establezca una nueva contraseña" required v-model="contraseña"  >
  
  <label for="floatingPassword">Nueva Contraseña</label>
</div>     
<div class="form-floating mb-3" >
  <input type="password" class="form-control " id="pass2" name="clave2" placeholder="Confirme la nueva contraseña" required  v-model="confirmarContraseña"  >
  
  <label for="floatingPassword">Confirme Contraseña</label>
</div>          

           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" class="btn btn-outline-success" value="Verificar"  @Click="Editar(usuario)">
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                  </span>  Guardar</button>
                    <button type="reset" class="btn btn-outline-danger">
                     <span class="icon is-small">
                  <i class="fas fa-times"></i>
                  </span>  Cancelar</button>
            
           </div>
        

        </div>
        

        </form>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>

export default { 
   el: '#myform',
   data(){
    return {
      usuario: {
        contraseña: "",
        id_Usuario: "",
      },
      antigua: null,
      contraseña: null,
      confirmarContraseña: null,
      editando: null,

    }

  },
  created: function () {
    var data = JSON.parse(localStorage.getItem("user-info"));
    if (data != null) {
      this.usuario.contraseña = data.contraseña;
      this.usuario.id_Usuario = data.id_Usuario;
      console.log(this.usuario.contraseña)
      console.log(this.usuario.id_Usuario)
    } else {
      console.log("TODO: Regresar a pagina de LOGUEO");
    }
  },
methods: { 

  validateForm (e){
     if(this.usuario.contraseña != antigua ){
      alert("Debes Ingresar la antigua contraseña");
      e.preventDefault();
    }
    if(!this.contraseña){
      alert("Debes Ingresar la nueva contraseña");
      e.preventDefault();
    }
    if(!this.confirmarContraseña){
      alert("Debes Confirmar la nueva contraseña");
      e.preventDefault();
    }
  },

   editarUsuario(usuario) {
      this.usuarioEditado = Object.assign({}, usuario);
      this.editando = usuario.id;
    },
    modificarUsuario(id_Usuario) {
      this.usuario = id_Usuario;
      console.log(this.usuario);
    },

   async Editar(contraseña) {
      try {
        const request = await fetch(
          `https://localhost:5001/api/usuario/${this.usuario.id_Usuario}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contraseña),
          }
        );

        if (request.ok) {
          swal("Bien!", "Contraseña Modificado!", "success");
         
        }
      } catch (error) {
        console.log(error);
        swal("Error!", "Contraseña no pudo ser Modificada!", "error");
      }
    },

}

}

</script>


<style>


</style>

