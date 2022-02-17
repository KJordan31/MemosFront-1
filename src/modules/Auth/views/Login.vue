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
                        <label class="form-label">Correo</label>
                        <input
                          class="form-control form-control-lg"
                          type="correo"
                          name="correo"
                          required
                          placeholder="Ingrese Correo"
                          v-model="login_form.email"
                        />
                      </div>
                    </div>
                    <div class="container">
                      <div class="mb-3">
                        <label for="floatingInput">Contraseña</label>
                        <input
                          class="form-control form-control-lg"
                          :type="show == true ? 'text' : 'password'"
                          id="floatingPassword"
                          required
                          placeholder="Ingrese Contraseña"
                          v-model="login_form.password"
                          :maxlength="20"
                        />
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
                        <div class="form-floating mb-3">
                          <input
                            :type="show == true ? 'text' : 'password'"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            required
                            v-model="login_form.password"
                            :maxlength="20"
                          />

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
                      <input
                        type="submit"
                        class="btn btn-lg btn-primary"
                        value="Login"
                      />
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
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  data: () => {
    return {
      password: "",
      show: false,
    };
  },
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    return {
      login_form,
      login,
    };
  },
};

// export default {
//   setup() {
//     const login_form = ref({
//       email: "",
//       password: "",
//     });
//     const register_form = ref({});
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
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     return {
//       login_form,
//       register_form,
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

@mixin showpass($property) {
  position: absolute;
  left: $property;
  top: 20px;
  z-index: 11;
  cursor: pointer;
}

.show-icon {
  @include showpass(20px);
}

.hide-icon {
  @include showpass(20px);
  color: #555;
}
</style>
