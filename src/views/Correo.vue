<template>
  <body class="bg-light">
    <div class="container" v-for="usuario in usuarios" :key="usuario.Id" >
      <div class="card my-10" v-for="memo in memos " :key="memo.codigo">
        <div class="card-body" >
          <h1 class="h3 mb-2">{{ memo.asunto }}</h1>
          <h5 class="text-teal-700">
            {{usuario.nombre}}{{usuario.apellidos}} ({{ usuario.correo }}) {{memo.fecha}}
          </h5>
          <h8 class="text-teal-700">Para: {{memo.usuario}}</h8>
          <hr />
          <router-link to="/bandeja/nuevo" class="link-dark"
            >Responder</router-link
          >
          <hr />
          <div class="space-y-3">
              <li v-for="contenido in contenidos" :key="contenido.Id">
            <p class="text-gray-700">{{ contenido.contenido }}</p>
            </li>
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
export default {
data() {
    return {
      memos: [],
      contenidos: [],
      usuarios: []
    };
  },

  methods: {
    getMemos() {
      fetch("https://localhost:5001/api/memorandum")
        .then((response) => response.json())
        .then((data) => {
          this.memos = data;
        
        });
    },

    getContenido(){
        fetch("https://localhost:5001/api/contenido")
        .then((response) => response.json())
        .then((data) => {
            this.contenidos = data;
        })
    },
     getUsuarios() {
      fetch("https://localhost:5001/api/usuario")
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
        });
    },
  },

  mounted() {
    this.getMemos();
    this.getContenido();
    this.getUsuarios();
  },

};
</script>

<style></style>
