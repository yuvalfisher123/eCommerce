<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
  import navigation from '@/components/navbar.vue'
  import api from './server/api';

  export default {
    name: 'main-app',
    components: {
      navigation
    },
    async created() {
      const token = localStorage.getItem('token');

      if (token) {
        const data = (await api.getUserData()).data;

        this.$store.commit('ADD_USER_DATA', data);
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
