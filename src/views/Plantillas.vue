<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
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
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      Plantillas: [],
      Agregar: {},
    };
  },

  methods: {
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
