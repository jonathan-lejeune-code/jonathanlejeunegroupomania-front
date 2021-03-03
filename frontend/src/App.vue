<template>
  <div id="app">
    <header>
      <div id="nav" class="bg-nav py-2">
        <!-- User not connected -->
        <div class="" v-if="id === null">
          <router-link to="/signup">Inscription</router-link> |
          <router-link to="/login">Connexion</router-link>
        </div>
      </div>
      <Header />
    </header>

    <body class="bg-body">
      <router-view />
    </body>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    let idUser = localStorage.getItem("Id");
    console.log(idUser);
    this.id = idUser;
  },
  methods: {
    exitUser() {
      localStorage.removeItem("Id");
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("email");
      location.replace(location.origin + "/signup#/signup");
      location.reload();
    },
  },
};
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
}
#nav {
  background-color: #f0e8c7;
  a {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 1.2rem;
    color: #303030;
    &:hover {
      color: #000;
    }
    &.router-link-exact-active {
      color: red;
    }
  }
}
.bg-body {
  background-color: #f0e8c7;
}
</style>