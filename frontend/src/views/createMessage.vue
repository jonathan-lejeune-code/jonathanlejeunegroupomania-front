<template>
  <v-app>
    <HeaderProfil />
    <v-main class="pt-4 ml-4" fluid>
      <v-row>
        <v-col>
          
          <CardProfil />
        
         <createM/>
        </v-col>
      </v-row>
    </v-main>

    <Footer />
  </v-app>
</template>


<script>
import axios from "axios";
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardProfil from "../components/CardProfil.vue";
import createM from "../components/Form/CreateM.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
    CardProfil,
    createM,
    Footer,
  },
  

};
</script>

<style lang="scss" scoped>
</style>