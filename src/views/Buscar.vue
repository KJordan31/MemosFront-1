<template>
  <h1 class="h3 mb-3"><strong>Búsqueda</strong></h1>

  <div class="container">
    <div class="row">
      <!-- BEGIN SEARCH RESULT -->
      <div class="col-md-12">
        <div class="grid search">
          <div class="grid-body">
            <div class="row">
              <!-- BEGIN FILTERS -->
              <div class="col-md-3">
                <h5 class="grid-title"><i class="fa fa-filter"></i> Filtros</h5>
                <hr />

                <!-- BEGIN FILTER BY CATEGORY -->
                <h4>Categorias:</h4>
                <div class="checkbox">
                  <label><input type="checkbox" class="icheck" /> Código</label>
                </div>
                <div class="checkbox">
                  <label><input type="checkbox" class="icheck" /> Asunto</label>
                </div>
                <div class="checkbox">
                  <label
                    ><input type="checkbox" class="icheck" /> Usuario</label
                  >
                </div>

                <!-- END FILTER BY CATEGORY -->

                <div class="padding"></div>

                <!-- BEGIN FILTER BY DATE -->
                <h4>Por Fecha</h4>
                De:
                <div id="app">
                  <date-picker
                    v-model="range"
                    lang="en"
                    range
                    type="date"
                    format="dd-MM-YYYY"
                  ></date-picker>
                </div>

                Hasta:
                <div>
                  <date-picker
                    v-model="date"
                    lang="en"
                    type="date"
                    format="dd-MM-YYYY"
                  ></date-picker>
                </div>

                <!-- BEGIN FILTER BY PRICE -->
              </div>
              <!-- END FILTERS -->
              <!-- BEGIN RESULT -->
              <div class="col-md-9">
                <h2><i class="fa fa-file-o"></i> Resultados</h2>
                <hr />
                <!-- BEGIN SEARCH INPUT -->
                <div class="input-group">
                  <input
                    type="text"
                    v-model="buscar"
                    class="form-control"
                    placeholder="Buscar"
                  />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </div>
                <!-- END SEARCH INPUT -->

                <div class="padding"></div>

                <div class="row">
                  <!-- BEGIN ORDER RESULT -->

                  <!-- END ORDER RESULT -->
                </div>

                <!-- BEGIN TABLE RESULT -->
                <div class="responsive-table">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th>Código</th>
                        <th>Asunto</th>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Adjuntos</th>
                      </tr>
                      <tr v-for="memo in memos" :key="memo.codigo">
                        <td>{{ memo.codigo }}</td>
                        <td>{{ memo.asunto }}</td>
                        <td>{{ memo.fecha }}</td>
                        <td>{{ memo.usuario }}</td>
                        <td><i class="fas fa-search-plus"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- END TABLE RESULT -->

                <!-- BEGIN PAGINATION -->
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <!-- END PAGINATION -->
              </div>
              <!-- END RESULT -->
            </div>
          </div>
        </div>
      </div>
      <!-- END SEARCH RESULT -->
      <!-- Dashboard -->
      <div class="row">
        <div class="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
          <div class="card flex-fill w-100">
            <div class="card-header">
              <h5 class="card-title mb-0">Tipo de Memorandums</h5>
            </div>
            <div class="card-body d-flex">
              <div class="align-self-center w-100">
                <div class="py-3">
                  <div class="chart chart-xs">
                    <canvas ref="VueCanvasDrawing" id="chartjs-dashboard-pie"></canvas>
                  </div>
                </div>

                <table class="table mb-0">
                  <tbody
                    v-for="tipo in tipos"
                    :key="tipo.Id"
                    v-bind:value="tipo.id"
                  >
                    <tr>
                      <td>{{ tipo.descripcion }}</td>
                      <td class="text-end">4306</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-xxl-3 d-flex">
        <div class="card flex-fill w-100">
          <div class="card-header">
            <h5 class="card-title mb-0">Usuarios</h5>
          </div>
          <div class="card-body d-flex w-100">
            <div class="align-self-center chart chart-lg">
              <canvas id="chartjs-dashboard-bar"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue3-datepicker";
import VueDrawingCanvas from 'vue-drawing-canvas';

export default {
  name: "app",
  components: {
    DatePicker,
    VueDrawingCanvas
  },
  data() {
    return {
      date: "",

      range: "",

      buscar: " ",

      memos: [],

      tipos: [],
    };
  },
  computed: {
    items() {
      return datos.filter((item) => {
        return item.descripcion
          .toLowerCase()
          .includes(this.buscar.toLowerCase());
      });
    },
  },

  methods: {
    getMemos() {
      fetch("https://localhost:5001/api/memorandum")
        .then((response) => response.json())
        .then((data) => {
          this.memos = data;
        });
    },
    getTipo() {
      fetch("https://localhost:5001/api/tipomemorandum")
        .then((response) => response.json())
        .then((data) => {
          this.tipos = data;
        });
    },
  },

  mounted() {
    this.getMemos();
    this.getTipo();
  },
};
</script>

<style></style>
