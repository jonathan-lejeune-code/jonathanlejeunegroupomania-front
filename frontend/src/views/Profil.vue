<template>
  <v-app>
    <HeaderProfil></HeaderProfil>
    <v-main class="white">
      <v-container>
        <v-row>
          <v-col cols="1" sm="12">
            <v-sheet min-height="70vh" rounded="lg" color="teal  darken-4">
              <span> Pseudo :</span> {{ posts.username }}<br />
              <span> Email :</span> {{ posts.email }}<br />
              <span> Numéro d'identifiant :</span> {{ posts.id }} <br />
              <p v-if="posts.attachementuser">
                <img
                  class="photoprofil"
                  :src="posts.attachementuser"
                  alt="..."
                />
              </p>
              <br />
              <p v-if="posts.isAdmin == true">
                <span> Profil administrateur :</span> {{ posts.isAdmin }} <br />
              </p>
              <!-- le profil administrateur ne s'affiche que si la personne connectée est admin -->
              <p>
                <button
                  @click.prevent="SupProfile"
                  type="submit"
                  class="btndelete"
                >
                  Supprimer le compte
                </button>
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import Footer from "../components/Footer/Footer.vue";
import axios from "axios";
export default {
  name: "HomeSignup",
  components: {
    HeaderProfil,
    Footer,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // je récupère les données du profil connecté
    axios
      .get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log("réponse API", response);
        this.posts = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    SupProfile() {
      //me permet de supprimer un profil au click
      if (window.confirm("Voulez vous vraiment supprimer votre compte?"))
        axios
          .delete("http://localhost:3000/api/auth/delete", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })

          .then(() => {
            localStorage.clear();
            document.location.href = "http://localhost:8080/signup";
          });
    },
  },
};
</script>


<style scoped lang="scss">
.photoprofil {
  height: 200px;
  width: 200px;
}
main {
  background-color: whitesmoke;
  background-position: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}
span {
  font-weight: bold;
  color: white;
  margin-left: 200px;
}
.btndelete {
  border: white solid 2px;
  background-color: white;
  margin-left: 200px;
}
</style>