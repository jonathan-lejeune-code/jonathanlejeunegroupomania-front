<template>
  <v-app>
    <HeaderProfil></HeaderProfil>
    <v-main class="white">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10">
            <v-sheet color="#091F43" class="pa-5">
              <h2 class="H2 text-center subtitle pt-5 pb-4">Mon Profil</h2>
              <v-col cols="12" sm="12">
                <v-card class="mx-auto pa-2" min-height="600">
                  <v-img
                    class="photoprofil ma-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShL2QkLAbENIkAN3QthsNkPpeKXRAPSnigtEgzPjvzvGTS3TtjJXZryy891VgTNqrN8MI&usqp=CAU"
                    alt="..."
                    width="98%"
                    height="350"
                  ></v-img>

                  <v-card-title>
                    <h3>{{ user.username }}</h3>
                  </v-card-title>

                  <v-card-subtitle class="text-center">
                    <p>{{ user.email }}</p>
                    <p>N°{{ user.id }}</p>
                    <p>{{ user.amin }}</p>
                  </v-card-subtitle>

                  <v-card-actions>
                    <div class="hidden-sm-only hidden-xs-only mx-auto">
                      <v-btn class="btn" text @click.prevent="Actual">
                        Fil d'actualité
                      </v-btn>
                      <v-btn @click="SupProfile" type="submit" class="mx-auto btn">
                        Supprimer le compte
                      </v-btn>
                    </div>
                    <div class="hidden-md-and-up ">
                      <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                          <v-btn color="#D3676F" v-on="on">
                            Menu
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item>
                            <v-list-item-title>
                              <v-btn class="btn" text @click.prevent="Actual">
                                Fil d'actualité
                              </v-btn>
                            </v-list-item-title>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-title>
                              <v-btn @click="SupProfile" type="submit" class="mx-auto btn">
                                Supprimer le compte
                              </v-btn></v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
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
    Footer
  },
  data() {
    return {
      user: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/auth/", {
        headers: { Authorization: "Bearer " + localStorage.token }
      })
      .then(response => (this.user = response.data.user))
      .catch(err => console.log(err));
  },

  methods: {
    SupProfile() {
      //me permet de supprimer un profil au click
      if (window.confirm("Voulez vous vraiment supprimer votre compte?"))
        axios
          .delete("http://localhost:3000/api/auth/users/" + user.id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          })

          .then(() => {
            localStorage.clear();
            document.location.href = "http://localhost:8080/signup";
          });
    },

    Actual() {
      document.location.href = "http://localhost:8080/message";
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;
}
p {
  padding-bottom: 5px;
  font-size: 20px;
  margin: 0;
  color: #d3676f;
}

.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.btn {
  width: 250px;
  font-size: 16px;
  border: solid #091f43 5px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
