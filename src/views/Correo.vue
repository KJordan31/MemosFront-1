<template>
  <body class="bg-light">
    <div class="container">
      <div class="card my-10" v-if="memo != null">
        <div class="card-body">
          <h1 class="h3 mb-2">{{ memo.asunto }}</h1>
          <h5 class="text-teal-700">
            {{ memo.usuario }}
            {{ memo.fecha }}
          </h5>
          <h8 class="text-teal-700">Para: {{ memo.destinatarioUsu }}</h8>
          <hr />
           <div
              class="d-grid gap-2 d-md-flex justify-content-md"
            
            >
              <button
                type="submit"
                class="btn btn-outline-success"
                 @click="agregarBitacora"
                
              >
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
                Aceptar
              </button>
              <router-link type="submit" class="btn btn-outline-danger" :to="`nuevo/${memo.id}`">
                <span class="icon is-small">
                  <i class="fas fa-ban"></i>
                </span>
                No Aceptar
              </router-link>
            </div>
          
          <hr />
          
          <div class="space-y-3">
            
              <p class="text-gray-700">{{ memo.contenido.contenido }}</p>
            
          </div>
          <hr />
          <a
            class="btn btn-primary"
            href="https://app.bootstrapemail.com/templates"
            target="_blank"
            >Adjuntos</a
          >
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import swal from "sweetalert";

export default {

  props: ["id"],
  data() {
    return {
      memos: [],
      memo: null,
      usuarios: [],
      usuario: { 
       
      },
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

    getUsuarios() {
      fetch("https://localhost:5001/api/usuario")
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
        });
    },

        async agregarBitacora() {
          const Nombre = this.usuario.nombre
          const Apellido = this.usuario.apellidos
        let newItem = {
          
          observacion: 'Aceptado',
          usuario: Nombre.concat(Apellido),
          id_Memorandum: this.memo.id,
          id_Estado: '3',
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
          swal("Bien!", "Memorandum Aceptado!", "success");
            this.$router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      }

   
  },

  mounted() {
    console.log(this.$route.params.id);
    this.getMemos();

    this.getUsuarios();
  },
};
</script>

<style></style>
