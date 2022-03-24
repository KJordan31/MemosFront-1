<template>

<div class="container">
    
<div class="email-app" v-if="memo != null" >
    
    <main>
        <p class="text-center" ></p>
        
        <h1 class="h3 mb-3"><strong>Responder</strong> </h1>
        <form>
            <div class="form-row mb-3">
                <label for="to" class="col-2 col-sm-1 col-form-label">De:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="to" placeholder="khenriquez@trasporte.gob.hn" v-model="memo.destinatarioUsu">
                </div>
            </div>
            <div class="form-row mb-3">
                <label for="cc" class="col-2 col-sm-1 col-form-label">Para:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="cc" placeholder="Type email" v-model="memo.usuario">
                </div>
            </div>
            <div class="form-row mb-3">
                <label for="bcc" class="col-2 col-sm-1 col-form-label">Asunto:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="bcc" placeholder="Type subject" v-model="memo.asunto">
                </div>                
            </div>
            <div class="form-row mb-3">
                <label for="bcc" class="col-2 col-sm-1 col-form-label">Adjuntos:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="adjuntos">
                </div>                
            </div>
        </form>
        <div class="row">
            <div class="col-sm-11 ml-auto">
                <div class="toolbar" role="toolbar">
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-bold"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-italic"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-underline"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-left"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-right"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-center"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-align-justify"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-indent"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-outdent"></span>
                        </button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-list-ul"></span>
                        </button>
                        <button type="button" class="btn btn-light">
                            <span class="fa fa-list-ol"></span>
                        </button>
                    </div>
                    <button type="button" class="btn btn-light">
                        <span class="fa fa-trash-o"></span>
                    </button>
                    <button type="button" class="btn btn-light">
                        <span class="fa fa-paperclip"></span>
                    </button>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                            <span class="fa fa-tags"></span>
                            <span class="caret"></span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">add label <span class="badge badge-danger"> Home</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-info"> Job</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-success"> Clients</span></a>
                            <a class="dropdown-item" href="#">add label <span class="badge badge-warning"> News</span></a>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <textarea class="form-control" id="message" name="body" rows="12" placeholder="Click here to reply" v-model="memo.contenido.contenido" disabled="disabled">  </textarea>
                     <textarea class="form-control" id="message" name="body" rows="12" placeholder="Click here to reply" v-model="itemPorAgregar.observacion">  </textarea>
                </div>
                <br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                type="submit"
                class="btn btn-outline-success"
                 @click="agregarBitacora"
                
              >
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
                Enviar
              </button>
                    <router-link type="submit" class="btn btn-outline-danger" to="/bandeja/entrada">
                <span class="icon is-small">
                  <i class="fas fa-ban"></i>
                </span>
                Cancelar
              </router-link>
                </div>
            </div>
        </div>
    </main>
</div>
</div>
</template>

<script>
import swal from "sweetalert";

export default {
     data() {
    return {
      memos: [],
      memo: null,
      editando: null,
       usuario: { 
       
      },
       itemPorAgregar: {},
      
      
    };
  },

  created: function () {
    var data = JSON.parse(localStorage.getItem("user-info"));
    if (data != null) {
      
     
      this.usuario.nombre = data.nombre;
      this.usuario.apellidos = data.apellidos;
      this.usuario.correo = data.correo;
      this.usuario.super_Usuario = data.super_Usuario;
      console.log(this.usuario.contraseña);
      console.log(this.usuario.id_Usuario);
    } else {
      console.log("TODO: Regresar a pagina de LOGUEO");
    }
  },


  methods: {
    
    getMemos() {
      fetch(`https://localhost:5001/api/memorandum/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.memo = data;
          console.log(this.memo);
        });
    },

     mostrarMemo(memo) {
      this.usuarioEditado = Object.assign({}, memo);
      this.editando = memo.id;
    },

     mostrar(id) {
      this.memo = id;
      console.log(this.memo);
    },

     async agregarBitacora() {
          const Nombre = this.usuario.nombre
          const Apellido = this.usuario.apellidos
        let newItem = {
          
          observacion: this.itemPorAgregar.observacion,
          usuario: Nombre.concat(Apellido),
          id_Memorandum: this.memo.id,
          id_Estado: '2',
          id_Accion: '2'
        }
        try {
          const request = await fetch(`https://localhost:5001/api/bitacora`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
          })

          if (request.ok) {
            this.$emit('update');
          swal("Bien!", "Respuesta de Memorandum Enviada!", "success");
            this.$router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      }

 
  },

  mounted() {
    this.getMemos();
   
  },

}
</script>

