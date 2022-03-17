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
                    class="form-control"
                    placeholder="Buscar"
                    v-model="filtro_usuario"
                  />
                  <span class="input-group-btn">
                    <button
                      class="btn btn-primary"
                      type="button"
                      @click="filterUser"
                    >
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
                      <tr v-for="memo in memos" :key="memo" v-show="1">
                        <td>{{ memo.codigo }}</td>
                        <td>{{ memo.asunto }}</td>
                        <td>{{ memo.fecha }}</td>
                        <td>{{ memo.destinatarioUsu }}</td>
                        <td>
                          <button
                            @click="AdjuntosList(memo)"
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
                </div>

                <!-- modal -->
         <div v-if="actualizar" class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ memo.codigo }}</h5>
      </div>
      <div class="modal-body" >
        {{memo.contenido.contenido}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                <!-- END TABLE RESULT -->

                <!-- BEGIN PAGINATION -->
                <!-- <nav aria-label="Page-navigation">
                  <ul class="pagination justify-content-center">
                    <li class="page-item" @click="getPreviousPage()">
                      <a class="page-link">Anterior</a>
                    </li>

                    <li
                      v-for="pagina in totalPaginas()"
                      :key="pagina"
                      @click="getDataPagina(pagina)"
                      class="page-item"
                      v-bind:class="isActive(pagina)"
                    >
                      <a class="page-link">{{ pagina }}</a>
                    </li>
                    <li class="page-item" @click="getNextPage()">
                      <a class="page-link">Siguiente</a>
                    </li>
                  </ul>
                </nav> -->

                <!-- END PAGINATION -->
              </div>
              <!-- END RESULT -->
            </div>
          </div>
        </div>
      </div>
      <!-- END SEARCH RESULT -->
      <!-- Dashboard -->
      <!-- Pie Chart -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">Memorandums</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="chart-pie pt-4 pb-2"></div>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Informativos
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Llamados
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Corrolativo
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="
                card-header
                py-3
                d-flex
                flex-row
                align-items-center
                justify-content-between
              "
            >
              <h6 class="m-0 font-weight-bold text-primary">Usuarios</h6>
              <BarChart v-bind="barChartProps" />
              <LineChart></LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue3-datepicker";
import VueDrawingCanvas from "vue-drawing-canvas";
import { BarChart, useBarChart } from "vue-chart-3";
import { ref, computed, onMounted } from "vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    DatePicker,
    VueDrawingCanvas,
    BarChart,
  },
  data() {
    return {
      date: "",

      range: "",

      usuario: " ",

      memos: [],

      tipos: [],

      elementosPorPagina: 5,

      datosPaginados: [],

      PaginaActual: 1,

      loaded: false,

      chartdata: null,

      filtro_usuario: " ",

      copyMemo: [],

      DatosUsu: [],

      actualizar: false,
    };
  },
  filters: {
    date: function (data) {
      return (
        data.getFullYear() +
        "año" +
        data.getMonth() +
        "mes" +
        data.getDate() +
        "día, semana" +
        data.getDay() +
        "," +
        data.getHours() +
        " Hora " +
        data.getMinutes() +
        " minutos " +
        data.getSeconds() +
        " segundos "
      );
    },
  },

  created() {
    this.copyMemo = this.memos;
  },

  mounted() {
    this.getMemos();
    this.getDataPagina(1);
  },

  methods: {
    getMemos() {
      fetch("https://localhost:5001/api/memorandum")
        .then((response) => response.json())
        .then((data) => {
          this.memos = data;
        });
    },

      AdjuntosList(id) {
      this.actualizar = true;
      this.memo = id;
      console.log(this.memo);
    },

    filterUser() {
      this.memos = this.copyMemo;
      this.memos = this.memos.filter((memo) => {
        return memo.destinatarioUsu === this.filtro_usuario;
      });
    },

    totalPaginas() {
      return Math.ceil(this.memos.length / this.elementosPorPagina);
    },

    getDataPagina(noPagina) {
      this.PaginaActual = noPagina;
      this.datosPaginados = [];
      let ini = (noPagina = this.elementosPorPagina - this.elementosPorPagina);
      let fin = (noPagina = this.elementosPorPagina);

      this.datosPaginados = this.memos.slice(ini, fin);
    },

    getPreviousPage() {
      if (this.PaginaActual > 1) {
        this.PaginaActual--;
      }

      this.getDataPagina(this.PaginaActual);
    },

    getNextPage() {
      if (this.PaginaActual < this.totalPaginas()) {
        this.PaginaActual++;
      }

      this.getDataPagina(this.PaginaActual);
    },

    isActive(noPagina) {
      if (noPagina == this.PaginaActual) {
        return "active";
      } else {
        return "";
      }
    },

 
  },

  setup() {
    const Labels = ref(["Kenneth", "Micro", "Sebastian"]);

    const Total = ref([5, 10, 20]);

    onMounted(async () => {
      const request = await fetch("https://localhost:5001/api/datos/usuarios");
      const response = await request.json();

      Labels.value = response.flatMap((x) => x.DestinatarioUsu);
      Total.value = response.flatMap((x) => x.Total);
    });
    const data = ref([1, 1, 2, 1, 2]);
    const legendTop = ref(true);
    const imgData = ref(null);

    const options = computed(() => ({
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }));

    const chartData = computed(() => ({
      labels: Labels.value,
      datasets: [
        {
          data: Total.value,
          backgroundColor: [
            "#0078DF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
      options,
    });

    return { barChartProps, barChartRef, imgData, Labels, Total };
  },
};
</script>

<style lang="css">
.small {
  max-width: 800px;
  /* max-height: 500px; */
  margin: 50px auto;
}
</style>
