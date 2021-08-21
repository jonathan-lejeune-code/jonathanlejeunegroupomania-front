<template>
  <v-row justify="center">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        prepend-icon="mdi-email-edit-outline"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-15-5"
        label="Mot de passe"
        hint="Minimum 8 caractére"
        prepend-icon="mdi-form-textbox-password"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn
        :loading="loading"
        :disabled="loading"
        color="teal"
        outlined
        class="mr-4"
        @click="Vlogin"
      >
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
import axios from "axios";
export default {
  name: "ConnexionForm",
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail est obligatoire",
        (v) => /.+@.+\..+/.test(v) || "L'email doit être valide",
      ],
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Obligatoire",
        min: (v) => v.length >= 8 || "Minimum 8 caractére",
        emailMatch: () =>
          `L'email et le mot de passe que vous avez entrés ne correspondent pas`,
      },
    };
  },
  methods: {
    Vlogin() {
      if (this.email == null || this.password == null) {
        axios
          .post("http://localhost:3000/api/auth/login")
          .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            document.location.href = "http://localhost:8080/message";
          })
          .catch((error) => console.log(error));
      }
    },
    reset() {
      this.$refs.form.reset();
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