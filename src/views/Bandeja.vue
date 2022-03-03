<template>
  <div class="container bootdey">
    <div class="email-app mb-4">
      <main class="inbox">
        <router-view />
        <div class="toolbar">
          <div class="btn-group">
            <h1 class="h3 mb-3"><strong>Bandeja</strong> Entrada</h1>
          </div>
        </div>

        <ul class="messages" v-for="memo in memos " :key="memo.codigo">  
          <li class="message unread" >
            <router-link to="/bandeja/correo">
              <div class="actions">
                <span class="action"><i class="fa fa-square-o"></i></span>
                <span class="action"><i class="fa fa-star-o"></i></span>
              </div>
              <div class="header">
                <span class="from">{{ memo.usuario }}</span>
                <span class="date">
                  <span class="fa fa-paper-clip"></span> {{ memo.fecha }}</span
                >
              </div>
              <div class="title">
                {{ memo.asunto }}
              </div>
              <li v-for="contenido in contenidos" :key="contenido.Id">
              <div class="description" >
                {{contenido.contenido}}
              </div>
              </li>
            </router-link>
          </li>
          
          
         
         
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memos: [],
      contenidos: []
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
    }
  },

  mounted() {
    this.getMemos();
    this.getContenido();
  },
};
</script>

<style></style>
