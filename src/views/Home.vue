<template>
  <div class="wrapper">
    <SideNav/>
    <div class="main">
      <NavBar />
      <div class="main">
        <div class="content">
          <div class="container-fluid p-0">
             <router-view/>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '../layout/SideNav.vue'
import NavBar from '../layout/NavBar.vue'

export default {
  name: 'Home',
  components: {
    SideNav,
    NavBar
  }
}
</script>
 