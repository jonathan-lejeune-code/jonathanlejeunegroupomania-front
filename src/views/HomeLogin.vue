<template>
  <v-app id="main">
    <HeaderForm></HeaderForm>
    <v-main>
      <row class="Form d-flex flex-column align-items-center mb-8">
        <h2 class="H2 text-center subtitle pt-5 pb-4">Connexion</h2>
        <p class="P text-center font-italic">
          Connectez-vous pour accéder au forum !
        </p>
        <ConnexionForm />
      </row>

      <v-img
        alt="image bureau"
        class="imggroupe"
        src="../assets/desk.jpg"
        max-height="600"
        max-width="600"
      />
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderForm from "../components/Header/HeaderForm.vue";
import ConnexionForm from "../components/Form/ConnexionForm";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "HomeLogin",
  components: {
    HeaderForm,
    ConnexionForm,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: #091f43;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.H2 {
  font-size: 50px;
}

.P {
  font-size: 20px;
}

.imggroupe {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
