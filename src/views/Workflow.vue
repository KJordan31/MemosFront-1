<template>
  <h1 class="h3 mb-3"><strong>Seguimiento</strong> de Memorandum</h1>
  <table class="table table-striped align-middle mb-0 bg-white">
    <thead>
      <tr>
        <th>Memorandum</th>
        <th>Observación</th>
        <th>Usuario</th>
        <th>Fecha</th>
        <th>Estado</th>
        <th>Detalles</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bit in bitacoras" :key="bit">
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <td>{{ bit.memorandum.codigo }}</td>
            </div>
          </div>
        </td>
        <td>{{ bit.observacion }}</td>
        <td>{{ bit.usuario }}</td>
        <td>{{ bit.fecha_Bitacora }}</td>
        <td>
          <span
            :class="
              bit.estado.descripcion
                ? 'badge badge-success rounded-pill d-inline'
                : 'badge badge-danger rounded-pill d-inline'
            "
            >{{ bit.estado.descripcion }}</span
          >
        </td>
        <td class="align-middle text-center">
          <button
            @click="getItem(bit.memorandum.id)"
            class="btn btn-outline-dark"
            type="button"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span class="btn-inner--icon"
              ><i class="fas fa-search-plus"></i
            ></span>
            <span class="btn-inner--text"></span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- modal -->
  <div
    v-if="ver"
    class="modal"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Seguimiento del Memorandum 
          </h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Memurandum</th>
                <th scope="col">Observación</th>
                <th scope="col">Usuario</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in bitacora" :key="item">
                <td>{{ item.Memorandum.Codigo }}</td>
                <td>{{ item.Observacion }}</td>
                <td>{{ item.SistemaUsuario }}</td>
                <td>{{ item.SistemaFecha }}</td>
                <td>
                  <span
                    :class="
                      item.Estado
                        ? 'badge badge-success rounded-pill d-inline'
                        : 'badge badge-danger rounded-pill d-inline'
                    "
                    >{{ item.Estado.Descripcion }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bitacoras: [],
      bitacora: [],
      ver: false,
      filtro1: ""
    };
  },

  methods: {
    getBitacora() {
      fetch("https://localhost:5001/api/bitacora")
        .then((response) => response.json())
        .then((data) => {
          this.bitacoras = data;
        });
    },




    getItem(idmemo) {
      fetch(`https://localhost:5001/api/work/${idmemo}`)
        .then((response) => response.json())
        .then((data) => {
          this.bitacora = data;
          this.ver = true;
        });
    },
  },

  mounted() {
    this.getBitacora();
  },
};
</script>

<style></style>
