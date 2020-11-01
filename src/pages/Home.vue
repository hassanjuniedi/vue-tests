<template>
    <div>
        <Status :status="loginStatus"/>
        <hr>
        <login @input="onLoginStatusUpdate" /> 
    </div>
</template>

<script>
import Status from '../components/Status.vue'
import Login from '../components/Login.vue'
export default {
    name: 'Home',
    components: {
        Status,
        Login
    },
    data() {
        return {
        loginStatus: 'idle'
        }
    },
    methods: {
        onLoginStatusUpdate(status) {
        this.loginStatus = status;
    }
  }
}
</script>