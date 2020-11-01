<template>
  <div :class="[status]">
    <h1 id="status-text">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: {
    status: String
  },
  computed: {
    msg() {
      switch(this.status) {
        case 'success':
          return 'Successfully logged in.'
        case 'failed':
          return 'Failed to login.'
        default:
          return 'Please login to view you status'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.failed {
  color: rgb(202, 63, 63);
}
.success {
  color:#42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
