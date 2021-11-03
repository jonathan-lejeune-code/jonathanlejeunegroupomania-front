<template>
  <v-app>
    <HeaderForm></HeaderForm>
    <v-main>
      <row class="Form d-flex flex-column align-items-center mb-8">
        <h2 class="H2 text-center subtitle pt-5 pb-4">Inscription</h2>
        <p class="P text-center font-italic">
          Inscription rapide et simple au forum !
        </p>
        <InscriptionForm />
      </row>
      <v-img
        alt="image bureau"
        class="imggroupe"
        contain
        max-height="400"
        max-width="400"
        src="../assets/unnamed.jpg"
      />
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderForm from "../components/Header/HeaderForm.vue";
import InscriptionForm from "../components/Form/InscriptionForm.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "HomeSignup",
  components: {
    HeaderForm,
    InscriptionForm,
    Footer
  },
  data() {},

  methods: {}
};
</script>

<style scoped lang="scss">
.subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: #d3676f;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.H2 {
  font-size: 50px;
}

.P {
  font-size: 20px;
}
.Form {
  height: auto;
}

.imggroupe {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}
</style>
