<template>
  <v-app>
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row>
        <v-col md="4">
          <CardProfil />
        </v-col>
        <div class="container forms">
          <AdminUsers />
        </div>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardProfil from "../components/CardProfil.vue";
import AdminUsers from "../components/Form/AdminUsers.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Users",
  components: {
    HeaderProfil,
    CardProfil,
    AdminUsers,
    Footer,
  },
};
</script>

<style scoped>
.forms {
  display: flex;

  margin-left: auto;
  margin-right: auto;
  width: 700px;
}
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>