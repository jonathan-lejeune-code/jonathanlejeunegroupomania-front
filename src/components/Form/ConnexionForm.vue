<template>
  <v-row justify="center">
    <v-col cols="4" xs="8" md="6" lg="4">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="dataLogin.email"
          :rules="[rules.required, rules.email]"
          label="E-mail"
          prepend-icon="mdi-email-edit-outline"
          required
        ></v-text-field>

        <v-text-field
          v-model="dataLogin.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Mot de passe"
          hint="Minimum 8 caractére"
          prepend-icon="mdi-form-textbox-password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-btn color="#091F43" outlined class="mr-4" @click="Vlogin">
          Connexion
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
        </v-btn>

        <v-btn color="#D3676F" class="mr-4" outlined @click="$refs.form.reset()">
          Reset Formulaire

          <v-icon> dark right mdi-reload </v-icon>
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "ConnexionForm",
  data() {
    return {
      dataLogin: {
        email: null,
        password: null
      },
      email: "",
      show1: false,
      password: "",
      rules: {
        email: value => {
          const pattern = /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
          return pattern.test(value) || "E-Mail invalide.";
        },
        required: value => !!value || "Obligatoire.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },

  methods: {
    Vlogin() {
      if (this.dataLogin.email !== null || this.dataLogin.password !== null) {
        axios
          .post("http://localhost:3000/api/auth/login", this.dataLogin)
          .then(response => {
            localStorage.setItem("token", response.data.token);
            document.location.href = "http://localhost:8080/message";
          })
          .catch(error => console.log(error));
      } else {
        console.log("Erreur est survenue !");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Form {
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  font-size: 20px;
  border: solid #00796b 2px;
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
    background-color: #00796b;
    color: white;
  }
}
</style>
