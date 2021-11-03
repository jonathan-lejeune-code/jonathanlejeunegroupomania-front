<template>
  <v-row>
    <v-col cols="12">
      <v-card class="card" width="200">
        <v-img height="auto" src="../assets/black.jpg">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0 mt-6 ml-6 " cols="12">
              <v-avatar class="profile" color="grey" size="80%" tile>
                <v-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShL2QkLAbENIkAN3QthsNkPpeKXRAPSnigtEgzPjvzvGTS3TtjJXZryy891VgTNqrN8MI&usqp=CAU"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0 text-center" cols="12">
              <v-list-item color="white" dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6 mb-5">
                    {{ user.username }}
                  </v-list-item-title>
                  <v-list-tile-sub-title> {{ user.email }}</v-list-tile-sub-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-1"></v-divider>
              <v-btn class="button" depressed rounded text @click.prevent="MyProfil" color="white">
                Mon profil
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <v-btn
                class="button"
                depressed
                rounded
                text
                v-if="user.isAdmin == true"
                @click.prevent="Users"
                color="white"
              >
                Tous les profil
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <v-btn
                class="button"
                depressed
                rounded
                text
                v-if="user.isAdmin == true"
                @click.prevent="Actual"
                color="white"
              >
                Fil d'actualité
              </v-btn>
              <v-divider class="my-1"></v-divider>

              <v-btn
                class="button"
                depressed
                rounded
                text
                @click.prevent="createMessage"
                color="white"
              >
                Crée Message
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click.prevent="disconect"
                color="white"
                class="mb-10 button"
              >
                déconnection
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
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
    MyProfil() {
      document.location.href = "http://localhost:8080/profil";
    },
    createMessage() {
      document.location.href = "http://localhost:8080/createMessage";
    },
    Actual() {
      document.location.href = "http://localhost:8080/message";
    },
    disconect() {
      localStorage.clear();
      document.location.href = "http://localhost:8080/";
    },
    Users() {
      document.location.href = "http://localhost:8080/users";
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: solid #d3676f 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>
