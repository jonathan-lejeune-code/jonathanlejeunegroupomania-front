<template>
  <v-app>
    <HeaderHome></HeaderHome>
    
    <v-main> 
      <h1>Grouposcord</h1>

      <p>Le réseaux social qui lie tout les employé </p>
      <router-view></router-view> 

      <v-img
          alt="logo groupomania"
          class="imggroupe"
          contain
          min-width="100"
          src="../assets/group.jpg"
          width="800px"
          height="600px"
        />

    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HeaderHome from '../components/HeaderHome.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { 
    HeaderHome,
    Footer, },
  name: "App",
};
</script>

<style lang="scss" scoped>

h1{
  color: black;
  font-size: 50px;
  text-align: center;
}

p{
  color: black;
  font-size: 30px;
  text-align: center;
}

.imggroupe{
  display: block;
    margin-left: auto;
    margin-right: auto
}
</style>