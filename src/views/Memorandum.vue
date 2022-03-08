<template>
  <div class="">
    <div class="email-app">
      <main>
        <p class="text-center"></p>

        <h1 class="h3 mb-3"><strong>Nuevo</strong> Memorandum</h1>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="form-row mb-3">
            <label for="to" class="col-2 col-sm-1 col-form-label">De:</label>
            <div class="col-10 col-sm-11">
              <input
                type="email"
                class="form-control"
                id="to"
                placeholder="khenriquez@trasporte.gob.hn"
                v-model="itemPorAgregar.usuario"
              />
            </div>
          </div>
          <div class="form-row mb-3">
            <label for="cc" class="col-2 col-sm-1 col-form-label">Para:</label>
            <div class="col-10 col-sm-11">
              <input
                type="email"
                class="form-control"
                id="cc"
                placeholder="Type email"
                v-model="itemPorAgregar.destinatarioUsu"
                required
              />
            </div>
          </div>
          <div class="form-row mb-3">
            <label for="bcc" class="col-2 col-sm-1 col-form-label">Tipo:</label>
            <div class="col-10 col-sm-11">
              <select
                @change="changeCatalog"
                v-model="itemPorAgregar.id_tipo"
                class="form-control"
                id="selectTipo"
                required
              >
                <option value="0" selected></option>
                <option
                  v-for="tipo in tipos"
                  :key="tipo.Id"
                  v-bind:value="tipo.id"
                >
                  {{ tipo.descripcion }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row mb-3">
            <label for="bcc" class="col-2 col-sm-1 col-form-label"
              >Asunto:</label
            >
            <div class="col-10 col-sm-11">
              <input
                type="text"
                class="form-control"
                id="bcc"
                placeholder="Type subject"
                autocomplete="off"
                v-model="itemPorAgregar.asunto"
                required
              />
            </div>
          </div>
          <div class="form-row mb-3">
            <label for="bcc" class="col-2 col-sm-1 col-form-label"
              >Adjuntos:</label
            >
            <div class="col-10 col-sm-11">
              <form id="form1" name="form1">
                <i class="fa fa-folder-open-o" aria-hidden="true"></i>&nbsp;
                <input
                  type="file"
                  accept=""
                  @change="onFileSelected"
                  name="myfile"
                />
              </form>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-sm-11 ml-auto">
            <div class="toolbar" role="toolbar">
              <div class="btn-group">
                <button type="button" class="btn btn-light">
                  <span class="fa fa-bold"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-italic"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-underline"></span>
                </button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-light">
                  <span class="fa fa-align-left"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-align-right"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-align-center"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-align-justify"></span>
                </button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-light">
                  <span class="fa fa-indent"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-outdent"></span>
                </button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-light">
                  <span class="fa fa-list-ul"></span>
                </button>
                <button type="button" class="btn btn-light">
                  <span class="fa fa-list-ol"></span>
                </button>
              </div>
              <button type="button" class="btn btn-light">
                <span class="fa fa-trash-o"></span>
              </button>
              <button
                type="file"
                class="btn btn-light"
                accept=""
                @change="onFileSelected"
                name="myfile"
              >
                <span class="fa fa-paperclip"></span>
              </button>
            </div>
            <div class="form-group mt-4">
              <textarea
                class="form-control"
                id="message"
                name="body"
                rows="12"
                placeholder="Click here to reply"
                v-model="itemPorAgregar.contenido"
                required
              ></textarea>
            </div>
            <br />
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-end"
              @submit.prevent="agregarMemo"
            >
              <button
                type="submit"
                class="btn btn-outline-success"
                @click="agregarMemo"
              >
                <span class="icon is-small">
                  <i class="fas fa-paper-plane"></i>
                </span>
                Enviar
              </button>
              <router-link type="submit" class="btn btn-outline-danger" to="/">
                <span class="icon is-small">
                  <i class="fas fa-ban"></i>
                </span>
                Descartar
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "my-component",
  data() {
    return {
      tipos: [],
      usuarios: [],
      adjuntos: [],
      itemPorAgregar: {},
      memos: [],
      contenidos: [],
    };
  },
  methods: {
    async onFileSelected(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("my-file", file);
    },

    sendEmail() {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          this.$refs.form,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },

    async agregarMemo() {
      console.log("object");
      let newItem = {
        codigo: this.itemPorAgregar.codigo,
        id_tipo: this.itemPorAgregar.id_tipo,
        usuario: this.itemPorAgregar.usuario,
        asunto: this.itemPorAgregar.asunto,
        id_Tipo_Destinatario: this.itemPorAgregar.id_Tipo_Destinatario,
        id_Estado: this.itemPorAgregar.id_Estado,
        id_Area: this.itemPorAgregar.id_Area,
        adjuntos: this.itemPorAgregar.adjuntos,
        id: this.itemPorAgregar.id,
        contenido: this.itemPorAgregar.contenido,
        usuario: this.itemPorAgregar.usuario,
        destinatarioUsu: this.itemPorAgregar.destinatarioUsu,
      };
      try {
        const request = await fetch(`https://localhost:5001/api/memorandum`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (request.ok) {
          this.$emit("update");
          console.log(request);
          this.itemPorAgregar = "";
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const request = await fetch(`https://localhost:5001/api/adjuntos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (request.ok) {
          this.$emit("update");
          this.itemPorAgregar = "";
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const request = await fetch(`https://localhost:5001/api/contenido`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });

        if (request.ok) {
          this.$emit("update");
          this.itemPorAgregar = "";
        }
      } catch (error) {
        console.log(error);
      }
    },

    getTipo() {
      fetch("https://localhost:5001/api/tipomemorandum")
        .then((response) => response.json())
        .then((data) => {
          this.tipos = data;
        });
    },
    getUsuarios() {
      fetch("https://localhost:5001/api/usuario", {
        params: {
          buscador: this.buscador,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
        });
    },
  },
  mounted() {
    this.getTipo();
    this.getUsuarios();
  },

  //     methods:
  //     {
  //      getFile: function(event){
  //     var _this = this;
  //     event.preventDefault();
  //     this.file = event.target.files[0];
  //     let formData = new FormData("form1");
  //     // Pase los parámetros usando append
  //     formData.append('age', 20);
  //          formData.append ('nombre', 'Zhang San');
  //     formData.append('dmsFile', this.file);
  //          // se deben agregar encabezados de solicitud de publicación
  //     let config = {
  //         headers: {
  //             'Content-Type': 'multipart/form-data'
  //         }
  //     }
  //     this.$http.post(url, formData, config)
  //     .then(function (res) {
  //                  alerta ("Carga exitosa");
  //     })
  // },
  //     }
};
</script>

<style></style>
