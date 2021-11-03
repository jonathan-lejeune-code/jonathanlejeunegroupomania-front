<template>
  <v-app-bar app color="#D3676F" dark>
    <v-col cols="6" xs="8" md="6" lg="4">
      <div class="d-flex align-center">
        <v-img
          alt="logo groupomania"
          class="logo"
          contain
          min-width="100"
          src="../logo/icon-left-font-monochrome-white.png"
          width="400"
        />
      </div>
    </v-col>
    <div id="btn">
      <v-btn class="button">
        <router-link class="lien" to="/">Accueil</router-link>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderForm"
};
</script>

<style scoped lang="scss">
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#btn {
  margin-left: auto;
  float: right;
}
.button {
  color: white;
  margin-left: 20px;
}

.lien {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 5px;
}
</style>
