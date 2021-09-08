<template>
  <v-card class="" max-width="200">
    <v-img height="100%" src="../assets/black.jpg">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0 mt-6 ml-6" cols="12">
          <v-avatar class="profile" color="grey" size="80%" tile>
            <v-img
              src="data:image/jpeg;base64,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"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0 text-center">
          <v-list-item color="white" dark>
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-5">
                {{ user.username }}
              </v-list-item-title>
              <v-list-tile-sub-title> {{ user.email }}</v-list-tile-sub-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
          <v-btn
            class="button"
            depressed
            rounded
            text
            @click.prevent="MyProfil"
            color="white"
          >
            Mon profil
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
    };
  },

  created() {
    axios
      .get("http://localhost:3000/api/auth/", {
        headers: { Authorization: "Bearer " + localStorage.token },
      })
      .then((response) => (this.user = response.data.user))
      .catch((err) => console.log(err));
  },

  methods: {
    MyProfil() {
      document.location.href = "http://localhost:8080/profil";
    },
    createMessage() {
      document.location.href = "http://localhost:8080/createMessage";
    },
    disconect() {
      localStorage.clear();
      document.location.href = "http://localhost:8080/";
    },
  },
};
</script>