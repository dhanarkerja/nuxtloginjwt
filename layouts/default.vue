//default.vue
<template>
  <div> 
    <Navbar/> 
    <br>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.navbar-nav .nav-item .nuxt-link-active{
  color:black;
}
</style>