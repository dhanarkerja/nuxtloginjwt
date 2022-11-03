//pages/user.vue
<template>
<div class="container">
  <div class="jumbotron">
    <h1 class="display-4">Hello, {{varUser.name}}!</h1>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'guest',
  computed: { 
    ...mapGetters([
        'user' 
    ])
  },
  data(){
    return{
      varUser:[]
    }
  },
  mounted(){
    console.log(localStorage.getItem("user"))
    this.varUser = JSON.parse(localStorage.getItem("user"))
  }
}
</script>