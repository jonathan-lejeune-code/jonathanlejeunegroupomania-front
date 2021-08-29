<template>
  <v-row justify="center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="dataLogin.email"
        label="E-mail"
        prepend-icon="mdi-email-edit-outline"
        required
      ></v-text-field>

      <v-text-field
        v-model="dataLogin.password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-15-5"
        label="Mot de passe"
        hint="Minimum 8 caractére"
        prepend-icon="mdi-form-textbox-password"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn color="teal" outlined class="mr-4" @click="Vlogin">
        Connexion
        <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
      </v-btn>

      <v-btn color="indigo" class="mr-4" outlined @click="$refs.form.reset()">
        Reset Formulaire

        <v-icon> dark right mdi-reload </v-icon>
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "ConnexionForm",
  data() {
    return {
      dataLogin: {
        email: null,
        password: null,
      },
      email: "",
      show1: false,
      password: "",
    };
  },

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    Vlogin() {
      if (this.dataLogin.email !== null || this.dataLogin.password !== null) {
        axios
          .post("http://localhost:3000/api/auth/login", this.dataLogin)
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            document.location.href = "http://localhost:8080/message";
          })
          .catch((error) => console.log(error));
      } else {
        console.log("Erreur est survenue !");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.Form {
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  font-size: 20px;
  border: solid teal 2px;
  margin-bottom: 15px;
}

.form-control {
  width: 300px;
  height: 30px;
}

.btn-submit-color {
  background-color: #546e7a;
  color: white;
  font-weight: bold;
  &:hover {
    font-weight: bold;
    background-color: teal;
    color: white;
  }
}
</style>