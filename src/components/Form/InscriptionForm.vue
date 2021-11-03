<template>
  <v-row justify="center">
    <v-col cols="10" md="6" lg="4">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="dataSignup.username"
          :counter="10"
          :rules="[rules.required]"
          label="Pseudo"
          prepend-icon="mdi-format-text-variant-outline"
          required
        ></v-text-field>

        <v-text-field
          v-model="dataSignup.email"
          label="E-mail"
          :rules="[rules.required, rules.email]"
          prepend-icon="mdi-email-edit-outline"
          required
        ></v-text-field>

        <v-text-field
          v-model="dataSignup.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-15-5"
          label="Mot de passe"
          hint="Minimum 8 caractére au moins une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux: $ @ % * + - _ !"
          prepend-icon="mdi-form-textbox-password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-btn
          :loading="loading"
          :disabled="loading"
          color="#091F43"
          outlined
          class="mr-4"
          @click="sendSignup"
        >
          Enregistrez-vous
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
  name: "InscriptionForm",
  data() {
    return {
      dataSignup: {
        username: null,
        email: null,
        password: null,
        avatar: null
      },
      msg: "",
      show1: false,
      rules: {
        email: value => {
          const pattern = /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
          return pattern.test(value) || "E-Mail invalide.";
        },
        required: value => !!value || "Obligatoire.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      }
    };
  },
  methods: {
    sendSignup() {
      const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
      const regexEmail = /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
      if (
        (this.dataSignup.email !== null ||
          this.dataSignup.username !== null ||
          this.dataSignup.password !== null) &&
        regexPassword.test(this.dataSignup.password) &&
        regexEmail.test(this.dataSignup.email) &&
        this.dataSignup.username
      ) {
        axios
          .post("http://localhost:3000/api/auth/signup", this.dataSignup)
          .then(response => {
            console.log(response);
            // this.dataSignup.email = null;
            // this.dataSignup.username = null;
            // this.dataSignup.password = null;
            location.replace(location.origin);
          })
          .catch(error => console.log(error));
      } else {
        alert(
          "Le mot de passe doit contenir de 8 à 15 caractères,au moins une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux: $ @ % * + - _ !"
        );
      }
    }
  }
};
</script>
