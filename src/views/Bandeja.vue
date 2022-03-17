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
              <li>
              <div class="description" >
                {{memo.contenido.contenido}}
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

 
  },

  mounted() {
    this.getMemos();
   
  },
};
</script>

<style></style>
