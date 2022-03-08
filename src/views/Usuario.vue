<template>
  <div class="col-md-9">
    <h2><i class="fas fa-users"></i> Usuarios</h2>

    <!-- BEGIN SEARCH INPUT -->
    <form>
      <div class="input-group">
        <input
          type="search"
          class="form-control mr-sm-2 buscador"
          placeholder="Buscar Usuario"
          @keyup.enter="searchName"
          v-model="nombre"
        />
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button" @click="searchName()">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
    <!-- END SEARCH INPUT -->
    <div v-show="!Object.keys(nombre).length">
      <div class="padding"></div>
      <hr />
      <button
        @click="agregar = !agregar"
        :class="[
          !agregar ? 'btn-outline-success' : 'btn-outline-danger',
          'btn btn-icon btn-3',
        ]"
        type="button"
      >
        <span class="btn-inner--text"
          >{{ agregar ? "Cancelar " : " Crear " }}
        </span>
        <span class="btn-inner--icon"><i class="fa fa-save"></i></span>
      </button>
      <div v-if="agregar" class="col-md-6">
        <br />
        <form
          class="row g-3 needs-validation"
          novalidate
          @submit.prevent="agregarItem"
          method="post"
        >
          <div class="col-md-6">
            <label for="validationCustom01" class="form-label">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              aria-describedby="btnAgregarItem"
              v-model="itemPorAgregar.nombre"
              autocomplete="off"
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Apellido</label>

            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder=""
              aria-describedby="btnAgregarItem"
              v-model="itemPorAgregar.apellidos"
              autocomplete="off"
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label"
              >Correo</label
            >
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput3"
                placeholder=""
                aria-describedby="btnAgregarItem"
                v-model="itemPorAgregar.correo"
                autocomplete="off"
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label"
              >Contraseña</label
            >

            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput4"
              placeholder=""
              aria-describedby="btnAgregarItem"
              v-model="itemPorAgregar.contraseña"
              autocomplete="off"
            />
            <div class="invalid-feedback">
              Por favos ingrese una contraseña valida.
            </div>
          </div>
          <label for="validationCustom03" class="form-label"
            >Tipo de Usuario</label
          >
          <select v-model="itemPorAgregar.super_Usuario" class="form-control">
            <option value="" placeholder="Seleccione un elemento"></option>
            <option value="true">Gerencia</option>
            <option value="false">Empleado</option>
          </select>

          <div class="col-12">
            <button
              class="btn btn-outline-info mb-0"
              type="button"
              id="btnAgregarItem"
              @click="agregarItem"
            >
              <span class="btn-inner--icon"
                ><i class="fas fa-plus-circle"></i></span
              >Crear Usuario
            </button>
          </div>
        </form>

        <br />
      </div>

      <div class="row">
        <!-- BEGIN ORDER RESULT -->

        <!-- END ORDER RESULT -->
      </div>

      <!-- BEGIN TABLE RESULT -->

      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center justify-content-center mb-5">
            <thead>
              <tr>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                  "
                >
                  ID
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Nombre
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Apellido
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Correo
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Contraseña
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Usuario
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    text-center
                    opacity-7
                    ps-2
                  "
                >
                  Editar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.Id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.contraseña }}</td>
                <td>
                  <span
                    :class="[
                      usuario.super_Usuario
                        ? 'p-3 mb-2 bg-success bg-gradient text-white'
                        : 'p-3 mb-2 bg-primary bg-gradient text-white',
                      'badge badge-sm',
                    ]"
                  >
                    {{ usuario.super_Usuario ? "Gerencia" : "Empleado" }}
                  </span>
                </td>
                <td class="align-middle text-center">
                  <button
                    @click="modificarUsuario(usuario)"
                    class="btn btn-outline-dark"
                    type="button"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <span class="btn-inner--icon"
                      ><i class="fas fa-edit"></i
                    ></span>
                    <span class="btn-inner--text"></span>
                  </button>
                </td>
                <!-- MODAL -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-show="Object.keys(nombre).length">
      <div class="card-body px-0 pt-0 pb-2">
        <br />
        <h2>Resultados de Busqueda</h2>
        <div class="table-responsive p-0">
          <table class="table align-items-center justify-content-center mb-5">
            <thead>
              <tr>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                  "
                >
                  ID
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Nombre
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Apellido
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Correo
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Contraseña
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    opacity-7
                    ps-2
                  "
                >
                  Usuario
                </th>
                <th
                  class="
                    text-uppercase text-secondary text-xxs
                    font-weight-bolder
                    text-center
                    opacity-7
                    ps-2
                  "
                >
                  Editar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in filtro" :key="usuario.Id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.contraseña }}</td>
                <td>
                  <span
                    :class="[
                      usuario.super_Usuario
                        ? 'p-3 mb-2 bg-success bg-gradient text-white'
                        : 'p-3 mb-2 bg-primary bg-gradient text-white',
                      'badge badge-sm',
                    ]"
                  >
                    {{ usuario.super_Usuario ? "Gerencia" : "Empleado" }}
                  </span>
                </td>
                <td class="align-middle text-center">
                  <button
                    @click="modificarUsuario(usuario)"
                    class="btn btn-outline-dark"
                    type="button"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <span class="btn-inner--icon"
                      ><i class="fas fa-edit"></i
                    ></span>
                    <span class="btn-inner--text"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- END TABLE RESULT -->

    <!-- BEGIN PAGINATION -->

    <!-- END PAGINATION -->
  </div>

  <!-- MODAL -->

  <div
    v-if="actualizar"
    class="modal-dialog modal-dialog-centered"
    id="myModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="card card-plain">
            <div class="card-header pb-0 text-left">
              <h3 class="modal-title text-info text-gradient">Edición</h3>
              <p class="mb-0">Modificacion de Usuario</p>
            </div>
            <div class="modal-body">
              <form role="form text-left" @submit.prevent="Editar">
                <label>Nombre</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="usuario.nombre"
                  />
                </div>
                <label>Apellido</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apellidos"
                    v-model="usuario.apellidos"
                  />
                </div>
                <label>Correo</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Correo"
                    v-model="usuario.correo"
                  />
                </div>
                <label>Contraseña</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contraseña"
                    v-model="usuario.contraseña"
                  />
                </div>

                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    v-model="usuario.super_Usuario"
                  />
                  <label class="form-check-label" for="rememberMe">{{
                    usuario.super_Usuario ? "Gerencia" : "Empleado"
                  }}</label>
                </div>
                <div
                  v-if="actualizado"
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <span class="alert-icon"><i class="ni ni-like-2"></i></span>
                  <span class="alert-text"
                    ><strong>Exito!</strong> Se realizó la actualización</span
                  >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  v-if="!actualizado"
                  class="modal-footer justify-content-md-center"
                >
                  <button
                    type="button"
                    @click="Editar(usuario)"
                    class="btn btn-outline-success"
                    
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    @click="actualizar = false"
                    class="btn btn-outline-danger"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import swal from "sweetalert";

export default {
  props: ["idUsuario"],
  data() {
    return {
      usuarios: [],
      itemPorAgregar: {},
      agregar: false,
      texto: "",
      usuariosFiltrado: [],
      buscador: " ",
      setTimeoutBuscador: "",
      nombre: "",
      apellidos: "",
      actualizar: false,
      usuario: {},
      editando: null,
    };
  },

  // emits: ["update"],
  // props: ["idItem", "data"],
  // setup(props, { emit }) {
  //   const actualizado = ref(false);

  //   const GuardarCambio = async (item) => {
  //     const itemActualizado = { ...item.data };
  //     const usuario = item.usuario;

  //     try {
  //       const request = await fetch(
  //         `https://localhost:5001/api/${usuario}/${itemActualizado.id}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(itemActualizado),
  //         }
  //       );

  //       if (request.ok) {
  //         actualizado.value = true;
  //         emit("ActualizarDataCatalog", itemActualizado);
  //         $("#myModal").modal("hide");
  //         swal("Bien!", "Usuario Modificado!", "success");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   return { GuardarCambio, actualizado };
  // },

  computed: {
    filtro() {
      return this.usuarios.filter(
        (item) => item.nombre.includes(this.nombre),
        (item) => item.apellidos.includes(this.apellidos)
      );
    },
  },

  created() {
    this.getUsuarios();
    this.usuariosFiltrado = this.usuarios;
  },

  methods: {
    getUsuarios() {
      fetch("https://localhost:5001/api/usuario")
        .then((response) => response.json())
        .then((data) => {
          this.usuariosFiltrado = this.usuarios = data;
        });
    },

    
     editarUsuario(usuario) {
      this.usuarioEditado = Object.assign({}, usuario);
      this.editando = usuario.id;
    },

    modificarUsuario(id) {
      this.actualizar = true;
      this.usuario = id;
      console.log(this.usuario);
    },

    search() {
      if (inputName) {
        this.usuarios = this.usuario.filter(
          (usuario) => usuario.nombre == nombre
        );
        this.getUsuarios();
      }
    },


    async Editar(usuario) {
   
  try {
    const request = await fetch(`https://localhost:5001/api/usuario/${this.usuario.id}`, {
      method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
          }
        );

        if (request.ok) {
         
          swal("Bien!", "Usuario Modificado!", "success");
          emit("ActualizarUser", usuario);
          // $("#myModal").modal("hide");
          actualizar = false          
        }
      } catch (error) {
        console.log(error);
      }
},

    async agregarItem() {
      console.log("object");
      let newItem = {
        nombre: this.itemPorAgregar.nombre,
        apellidos: this.itemPorAgregar.apellidos,
        correo: this.itemPorAgregar.correo,
        contraseña: this.itemPorAgregar.contraseña,
      };
      try {
        const request = await fetch(`https://localhost:5001/api/usuario`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (request.ok) {
          this.$emit("update");
          swal("Excelente!", "Usuario Creado!", "success");

          this.itemPorAgregar = "";
        }
      } catch (error) {
        console.log(error);
      }
    },

    mounted() {
      this.searchQuery = this.settings.initialSearchQuery;
      this.onClickSearch();
    },
  },
};
</script>

<style>

</style>
