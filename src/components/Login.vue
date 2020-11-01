<template>
  <div class="login">
    <div class="form-wrapper">
      <form>
      <label for="username">
        Username
      </label>
      <input id="username" v-model="username" class="form-control" type="text" name="username">
      <br>
      <label for="password">
        Password
      </label>
      <input id="password" v-model="password" class="form-control" type="password" name="password">

      <button id="submit" type="button" @click="onLogin">Login</button>
      <button id="reset" type="button" @click="onReset">Reset</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      let status = 'failed';
      if(this.username === 'user' && this.password === 'pass') {
        status = 'success';
      }
      this.$emit('input', status);
    },
    onReset() {
      this.username = '';
      this.password = '';
      this.$emit('input', 'idle');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-wrapper {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 24px;
  margin: 50px 0;
  width: 400px;
}
label {
  display: block;
}
.form-control {
  display: block;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 0px 2px #ccc;
  width: 100%;
}
button {
  padding: 8px 16px;
  margin-top: 16px;
  cursor: pointer;
  margin-right: 8px;
}
</style>
