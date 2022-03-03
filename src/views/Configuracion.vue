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
        <div class="panel-body">
          <div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
  
  <label for="floatingInput">Contraseña</label>
  
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control " id="floatingPassword" placeholder="Password" required>
  
  <label for="floatingPassword">Nueva Contraseña</label>
</div>     
<div class="form-floating mb-3" >
  <input type="password" class="form-control " id="floatingPassword" placeholder="Password" required>
  
  <label for="floatingPassword">Confirme Contraseña</label>
</div>           

           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" class="btn btn-outline-success">
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                  </span>  Guardar</button>
                    <button type="reset" class="btn btn-outline-danger">
                     <span class="icon is-small">
                  <i class="fas fa-times"></i>
                  </span>  Cancelar</button>
            
           </div>
        

        </div>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default { 
 data(){
     return{        
          password: '',
         repeatPassword: '',
         showpassword: false,
         usuarios:{
           "usuarios" : " ",
           "contraseña" : "",
         }
     }
 },

mounted(){

},

  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  

  },


      
 
 methods:{
  toggleShowPassword (){
    var show = document.getElementById("password")
    if(this.showpassword == false){
      this.showpassword = true
      show.type = "text"
    }else{
      this.showpassword = false
      show.type= "password"
    }
  }
}
}


</script>

