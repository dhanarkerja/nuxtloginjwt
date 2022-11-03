<template>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Register
          </div>
          <div class="card-body">
            <form method="post" @submit.prevent="register">
              <div class="form-group">
                <label for="email">Name</label>
                <input type="text" v-model="name" class="form-control" placeholder="Enter name">
              </div>
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
    </div >
    </template>
     
<script> 
    export default { 
     middleware: 'guest',
      data() {
        return {
          name: '',
          email: '',
          password: '',
          errors: null
        }
      },
      methods: {
        async register() {
          try {
            await this.$axios.post('register', {
              name: this.name,
              email: this.email,
              password: this.password
            }) 
    
          this.$router.push('/login')
          
          } catch (e) {
            this.errors = e.response.data.errors
          }
        }
      }
    }
</script>
