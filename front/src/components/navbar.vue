<template>
    <div class="navigation">
        <nav class="navbar navbar-dark bg-dark navbar-expand">
            <div class="container-fluid">
                <img id="logo" class="mx-3 img-fluid rounded" src="../assets/logo.png" alt="logo">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/products">products</a>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="profileDropdown" role="button" data-bs-toggle="dropdown">Profile</a>
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li v-if="isLoged"><a class="dropdown-item" href="login">Sign In</a></li>
                        <div v-else>
                          <li><p class="dropdown-item disabled mb-2">hello {{ stateData.first_name }}</p></li>
                          <li><button @click="logOut" class="dropdown-item">Sign Out</button></li>
                          <li><a class="dropdown-item" href="profile">View Profile</a></li>
                        </div> 
                      </ul>
                    </li>
                </ul> 
                <h1 class="m-auto text-light">BUYSTUFF.MONEY</h1>
                <form class="d-flex">
                    <input class="form-control mx-2" type="text" @keydown.enter.prevent="search" placeholder="Search" aria-label="Search" v-model="query">
                    <button class="btn btn-outline-light" type="button" @click="search">Search</button>
                </form>
            </div>
        </nav>
    </div>
  </template>
  
  <script>
  import { mapGetters} from 'vuex';
  
  export default {
    name: 'navigation-bar',
    data() {
    return {
        query:'',
        stateData: false
    }
  },
  methods: {
    search() {
        const currentPath = this.$route.fullPath;
        const nextPath = this.$router.resolve({name: 'products', query:{search: this.query}}).route.fullPath;

        if (currentPath !== nextPath) {
            this.$router.replace(nextPath);
        }
    },
    logOut() {
      localStorage.removeItem('token');
      this.$store.commit('ADD_USER_DATA', {});
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    isLoged() {
      return Object.keys(this.stateData).length === 0;
    },
  },
  watch: {
    getUser : function (user) {
      this.stateData = user;  
    }
  },
}
  
  </script>
  
  <style scoped>
  #logo {
    max-height: 80px;
  }
  </style>
  