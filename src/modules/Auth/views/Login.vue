<template>
  <body>
    <div class="container d-flex flex-column">
      <div class="row vh-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="d-table-cell align-middle">
            <div class="card">
              <div class="card-body">
                <div class="m-sm-4">
                  <div class="text-center">
                    <img
                      src="../Assets/Img/ihtt.png"
                      id="icon"
                      alt=""
                      width="300"
                      height="100"
                      class=""
                    />
                  </div>
                  <form @submit.prevent="login">
                    <div class="container">
                      <div class="mb-3">
                        <br />
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="correo"
                          class="form-control"
                          id="floatingUsuario"
                          placeholder="Usuario"
                          required
                          v-model="correo"
                        />
                        <label for="floatingInput">Usuario</label>
                      </div>
                    </div>
                    <div class="container">
                      <div class="mb-3">
                        <label for="floatingInput"></label>

                        <div class="form-floating mb-3">
                          <input
                            :type="show == true ? 'text' : 'password'"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            required
                            v-model="contraseña"
                            :maxlength="20"
                            autocomplete="off"
                          />
                          <div class="strength mb-1">
                            <i
                              class="fas fa-eye show-icon"
                              v-if="show"
                              @click="show = !show"
                            ></i>
                            <i
                              class="fas fa-eye-slash hide-icon"
                              v-else
                              @click="show = !show"
                            ></i>
                          </div>

                          <label for="floatingInput">Contraseña</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <!-- <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="remember-me"
                          name="remember-me"
                          checked
                        />
                        <span class="form-check-label"> Recuérdame </span>
                      </label> -->
                    </div>
                    <!-- <div class="alert alert-danger" role="alert" v-if="error">
                      {{ error_msg }}
                    </div> -->
                    <div class="text-center mt-3">
                      <!-- <router-link to="">
                        
                        <button type="submit"  class="btn btn-lg btn-primary" >Ingresar</button>
                      </router-link> -->
                      <div class="mt-3">
                        <div
                          class="alert alert-danger"
                          role="alert"
                          v-show="error"
                        >
                          {{ error_msg }}
                        </div>
                      </div>
                      <button
                        @click="login"
                        type="submit"
                        class="btn btn-lg btn-primary"
                      >
                        login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Login",
  data() {
    return {
      correo: "",
      contraseña: "",
      nombre: "",
      apellidos: "",
      show: false,
      error: false,

      usuario: [],
    };
  },

  methods: {
    async login() {
      let json = {
        correo: this.correo,
        contraseña: this.contraseña,
        nombre: this.nombre,
        apellidos: this.apellidos,
      };
      const response = await axios
        .post(`https://localhost:5001/api/usuario/login`, json)
        .then((data) => {localStorage.setItem("user-info", JSON.stringify(data.data));
          if (data.status == 200) {
            this.$router.push("/");
          } else {
            swal("Error!", "Usuario y/o Contraseña incorrecto!", "error");
          }
        });
    },

    mounted() {
      this.getLogin();
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push("/");
      }
    },
  },

  //   data: () => {
  //     return {
  //       password: "",
  //       show: false,
  //     };
  //   },
  //   setup() {
  //     const login_form = ref({});
  //     const store = useStore();

  //     const login = () => {
  //       store.dispatch("login", login_form.value);
  //     };

  //     return {
  //       login_form,
  //       login,
  //     };
  //   },
};

// export default {
//   setup() {
//     const login_form = ref({
//       email: "",
//       password: "",
//       show: false,
//     });

//     const store = useStore();

//     const url = "https://satt.transporte.gob.hn/api_login.php";

//     const doLogin = async () => {
//       try {
//         const formData = new FormData();

//         formData.append("appid", "89b473b3ea9d5b6719c8ee8ce0c247d5");
//         formData.append("modulo", "3");
//         formData.append("action", "do-login-web");
//         formData.append("nombre", login_form.value.email);
//         formData.append("password", login_form.value.password);

//         console.log(formData);

//         const request = await axios.post(url, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         const response = request.data;
//         if (response[0].result !== -1) {
//           //usar router push para mandar a la bandeja.
//           console.log("se logueo con exito redireccionar");
//           this.$router.push("/");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     return {
//       login_form,
//       doLogin,
//     };
//   },
// };
</script>

<style Lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
body {
  background-color: darkslategrey;
}

.strength {
  position: absolute;
  bottom: -20px;
  left: 100;
  right: 0;
  display: block;
  width: 25%;
  height: 100%;

  overflow: hidden;
  z-index: 9;
}

@mixin showpass($property) {
  position: absolute;
  left: $property;
  top: 20px;
  z-index: 11;
  cursor: pointer;
}

.show-icon {
  position: relative;
  left: 55px;
}

.hide-icon {
  position: relative;
  left: 55px;
  color: #9e9fa4;
}
</style>
