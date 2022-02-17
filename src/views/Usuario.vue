<template>
  <div class="col-md-9">
    <h2><i class="fas fa-users"></i> Usuarios</h2>

    <!-- BEGIN SEARCH INPUT -->
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar Usuario"
        @click.enter="filtro"
        @input="search"
        v-model="filtro"
      />
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" @click="searchData">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>
    <!-- END SEARCH INPUT -->

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
          <label for="validationCustom03" class="form-label">Contraseña</label>

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
        <select class="form-select mb-3" aria-label="Default select example">
          <option value="1">Empleado</option>
          <option value="2">Gerencia</option>
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
        <table class="table align-items-center justify-content-center mb-0">
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
                Usuario General
              </th>
              <th
                class="
                  text-uppercase text-secondary text-xxs
                  font-weight-bolder
                  text-center
                  opacity-7
                  ps-2
                "
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario) in usuarios" :key="usuario.Id">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.apellidos }}</td>
              <td>{{ usuario.correo }}</td>
              <td>{{ usuario.contraseña }}</td>
              <td>{{ usuario.super_Usuario }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- END TABLE RESULT -->

    <!-- BEGIN PAGINATION -->

    <!-- END PAGINATION -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  // setup(){
  //   const register_form = ref({});
  //   const store = useStore();

  //    const register = () =>{
  //      store.dispatch("register",register_form.value);

  //      return{
  //        register_form,
  //        register
  //      }

  //   }
  // },

//Metodo para conexion con fetch a la Api
  emits: ["update"],
  data() {
    return {
      usuarios: [],
      itemPorAgregar: {},
      agregar: false,
      texto: "",
      usuariosFiltrado: [],
    };
  },

  computed: {
    filtro: {
      get() {
        return this.texto;
      },
      set(value) {
        console.log("filtro ejecutado!");
        value = value.toLowerCase();
        this.usuariosFiltrado = this.usuarios.filter(
          (usuario) => usuario.texto.toLowerCase().indexOf(value) !== -1
        );
        this.texto = value;
      },
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
          this.usuarios = data;
        });
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
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getUsuarios();
  },
};
</script>

<style></style>
