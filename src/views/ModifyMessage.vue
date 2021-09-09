<template>
  <v-app>
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row class="">
        <v-col md="5">
          <CardCrea />
        </v-col>
        <ModifyM class="mt-15" />
      </v-row>
    </v-main>

    <Footer />
  </v-app>
</template>


<script>
import axios from "axios";
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardCrea from "../components/CardCrea.vue";
import ModifyM from "../components/Form/ModifyM.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "ModifyMessage",
  components: {
    HeaderProfil,
    CardCrea,
    ModifyM,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>