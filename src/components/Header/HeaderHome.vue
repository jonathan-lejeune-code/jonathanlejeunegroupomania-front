<template>
  <v-app-bar app color="teal darken-2" dark>
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
    <div id="btn">
      <v-btn class="button">
        <router-link class="lien" to="/signup">Inscription</router-link>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn class="button">
        <router-link class="lien" to="/login">Connexion</router-link>
        <v-icon>mdi-lock-open-variant</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderHome",
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