<template>
  <v-app>
    <HeaderProfil />
    <v-main
      class="pt-4 ml-4"
      fluid
      src="https://picsum.photos/1920/1080?random"
    >
      <v-row>
        <v-col>
          <CardCrea />

          <createM />
        </v-col>
      </v-row>
    </v-main>

    <Footer />
  </v-app>
</template>


<script>
import axios from "axios";
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardCrea from "../components/CardCrea.vue";
import createM from "../components/Form/CreateM.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
    CardCrea,
    createM,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>