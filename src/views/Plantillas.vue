<template>
  <div class="container">
    <div class="row">
      <div class="col-md-14">
        <div class="well well-sm">
          <form class="form-horizontal" @submit.prevent="agregar">
            <fieldset>
              <legend class="text-center header">Plantillas Memorandum</legend>
              <div class="form-group">
                <span class="col-md-1 col-md-offset-2 text-center"
                  ><i class="fa fa-pencil-square-o bigicon"></i
                ></span>
                <div class="col-md-8">
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    placeholder="Ingresar contenido de Plantilla"
                    rows="7"
                    required
                    v-model="Agregar.plantillas"
                  ></textarea>
                </div>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content-md">
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  @click="agregarItem"
                  id="btnAgregarItem"
                >
                  <span class="icon is-small">
                    <i class="fas fa-sd-card"></i>
                  </span>
                  Guardar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <div class="form-group mt-6">
    <div class="row ">      
  <div class="col-sm-6" v-for="plantilla in planti" :key="plantilla">
    <div class="card" >
      <div class="card-body" >
        <h1 class="h3 mb-3"><strong>Plantilla</strong> {{plantilla.id}}</h1>
        <p class="card-text">{{plantilla.plantillas}}</p>

         <div
              class="d-grid gap-2 d-md-flex justify-content-md-end"
            >
              <button
                type="submit"
                class="btn btn-outline-dark"
                @click="modificarPlanti(plantilla)"
                 data-toggle="modal"
                data-target="#myModal"
                            >
                <span class="icon is-small">
                  <i class="fas fa-pen"></i>
                </span>
                Modificar
              </button>
               <button
                type="submit"
                class="btn btn-outline-danger"
                @click="Borrar(plantilla.id)"
                            >
                <span class="icon is-small">
                  <i class="fa-solid fa-ban"></i>
                </span>
                Borrar
              </button>
          
            </div>   
        </div>                  
      </div>
    </div>
  </div>
</div>
  </div>

   <div
    v-if="actualizar"
    class="modal"
    id="myModal"
    tabindex="-1"
    aria-hidden="true"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modificación de Plantilla </h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <textarea class="form-control" id="message" name="body" rows="12" placeholder="Click here to reply" v-model="plantilla.plantillas" > </textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="Editar(plantilla)" data-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      Plantillas: [],
      Agregar: {},
      planti: [],
      plantilla: {},
      editando: null,
      actualizar: false,
    };
  },

  methods: {
eliminar(id){
console.log(id);
},


    editarPlanti(plantilla) {
      this.usuarioEditado = Object.assign({}, plantilla);
      this.editando = plantilla.id;
    },

    modificarPlanti(id) {
      this.actualizar = true;
      this.plantilla = id;
      console.log(this.plantilla.id);
    },

    async agregarItem() {
      console.log("object");
      let newItem = {
        plantillas: this.Agregar.plantillas,
      };

      try {
        const request = await fetch(`https://localhost:5001/api/plantillas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (request.ok) {
          this.$emit("update");
          swal("Excelente!", "Plantilla Creada!", "success");

          this.Agregar = "";
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
        swal("Error!", "Usuario no Pudo Ser Ingresado Correctamente!", "error");
      }
    },

        async Borrar(plantilla) {

      try {
        const request = await fetch(`https://localhost:5001/api/plantillas/${plantilla}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(plantilla),
        });

        if (request.ok) {
          this.$emit("update");
          swal("Hecho!", "Plantilla Borrada!", "success");
          this.$router.push("/");

        }
      } catch (error) {
        console.log(error);
        swal("Error!", "Usuario no Pudo Ser Ingresado Correctamente!", "error");
      }
    },

      async Editar(plantilla) {
      try {
        const request = await fetch(
          `https://localhost:5001/api/plantillas/${this.plantilla.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(plantilla),
          }
        );

        if (request.ok) {
          swal("Bien!", "Plantilla Modificado!", "success");
         $('#myModal').modal('hide');

        }
      } catch (error) {
        console.log(error);
        swal("Error!", "Plantilla no pudo ser Modificada!", "error");
      }
    },


   getPlantillas() {
      fetch("https://localhost:5001/api/plantillas")
        .then((response) => response.json())
        .then((data) => {
          this.planti = data;
        });
    },


  },


  mounted(){
this.getPlantillas();
},
};
</script>

<style>
.header {
  color: #36a0ff;
  font-size: 27px;
  padding: 10px;
}

.bigicon {
  font-size: 35px;
  color: #36a0ff;
}
</style>
