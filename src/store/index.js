import { createStore } from 'vuex'
import { auth } from '/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import router from '../router';




export default createStore({
  state: {
    acciones : [],
    user: null
  },
  mutations: {
    setAcciones(state, payload){
      state.acciones = payload
    },
    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async fetchAcciones({commit}){
      try {
        const res = await fetch('https://localhost:5001/Api/Accion');
        const data = await res.json();
        console.log(data);
        commit('setAcciones', data);
      } catch (error) {
        console.log(error);
      }
    },  

  },

    actions: {
    async login ({ commit }, details){
      const {email, password} = details

      try { 
        await signInWithEmailAndPassword(auth, email, password)

      }catch (error){
        switch(error.code) {
          case 'auth/user-not-found':
            alert("Usuario Incorrecto")
            break
            case 'auth/wrong-password':
              alert("Contraseña Incorrecta")
              break
              default:
                alert("Usuario y/o Contraseña Incorrecta")

        }

        return 

      }

      commit('SET_USER', auth.currentUser);

      router.push('/');
    },

    // async register ({ commit }, details){
    //   const {email, password} = details

    //   try { 
    //     await createUserWithEmailAndPassword(auth, email, password)
    //   }catch (error){
    //     switch(error.code) {
    //       case 'auth/email-already-in-use':
    //         alert("Usuario ya Existe")
    //         break
    //         case 'auth/invalid-email':
    //           alert("Usuario no Valido")
    //           break
    //           case 'auth/operation-not-allowed':
    //           alert("No Valido")
    //           break
    //           case 'auth/weak-password':
    //           alert("Contraseña Debil")
    //           break
    //           default:
    //             alert("Error")

    //     }

    //     return 

    //   }

    //   commit('SET_USER', auth.currentUser)

    //   router.push('/')
    // },

    fetchUser ({commit }){
      auth.onAuthStateChanged( async user => {
        if(user === null){
          commit('CLEAR_USER')
        }else{
          commit('SET_USER', user)

          if(router.isReady() && router.currentRoute.value.path === '/login'){
            router.push('/')
          }
        }
      })
    }

  },
  modules: {
  }
})