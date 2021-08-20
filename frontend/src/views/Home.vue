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
          width="600px"
          height="500px"
        />

    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HeaderHome from '../components/Header/HeaderHome.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  components: { 
    HeaderHome,
    Footer, },
  name: "/",
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
  margin: 0px;
}

.imggroupe{
  display: block;
    margin-left: auto;
    margin-right: auto
}
</style>