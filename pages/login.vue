//login.vue
<template>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{ error[0] }}
          </div>
        <form method="post" @submit.prevent="userLogin">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control"  placeholder="Password">
          </div> 
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</template>
 
<script> 
export default {
  middleware: 'guest',
  
  data() {
    return {
      email: '',
      password: '',
      errors: null
    }
  },
  methods: {
    async userLogin() {
      try {
        
        let formData = new FormData()
          formData.append('email', this.email)
          formData.append('password', this.password)

        const response = await this.$axios.$post('http://localhost:8000/api/login',formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }})
          
        localStorage.setItem("token",response.token)
        localStorage.setItem("user",JSON.stringify(response.user))
        
        // data kesimpan di index.js atau store 
        this.$store.commit("setUser",response.user) 

        console.log(response)
      
        this.$router.push('/user');

      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>

