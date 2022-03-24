<template>
<div class="row">
  <div class="col-sm-6" v-for="plantilla in plantillas" :key="plantilla">
    <div class="card" >
      <div class="card-body" >
        <h1 class="h3 mb-3"><strong>Plantilla</strong> {{plantilla.id}}</h1>
        <p class="card-text">{{plantilla.plantillas}}</p>

         <div
              class="d-grid gap-2 d-md-flex justify-content-md-end"
              @submit.prevent="agregarMemo"
            >
              <button
                type="submit"
                class="btn btn-outline-primary"
                  @click="modificarPlanti(plantilla)"             >
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
                Seleccionar
              </button>
          
            </div>                  
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Memorandum from "../views/Memorandum.vue"

export default {
  name: "Plantilla",
  props:['plantilla'],
  components:{
      Memorandum 
  },
data(){
  return {
    plantillas: [],
    plantilla: {},
    
  }
},

methods:{
 cargar(id){
            this.$emit('Plantilla', id)
        },


      editarPlanti(plantilla) {
      this.usuarioEditado = Object.assign({}, plantilla);
      this.editando = plantilla.id;
    },

    modificarPlanti(id) {
      this.actualizar = true;
      this.plantilla = id;
      console.log(this.plantilla.plantillas);
       this.$router.push("/memorandum");
      
    },

   async getPlantilla() {
    const request = await fetch("https://localhost:5001/api/plantillas");
      const response = await request.json();  
      console.log(response);
      this.plantillas = response;
      
    },

},

mounted(){
this.$emit("Plantilla", this.plantilla)
},

created(){
this.getPlantilla()
}
}
</script>

<style>

</style>