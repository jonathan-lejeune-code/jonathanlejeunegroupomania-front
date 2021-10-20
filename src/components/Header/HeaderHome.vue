<template>
  <v-app-bar app color="teal darken-2" dark>
    <v-col cols="7" xs="8" md="6">
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
    <v-col>
      <div id="btn" class="hidden-sm-only hidden-xs-only">
        <v-btn class="button">
          <router-link class="lien" to="/signup">Inscription</router-link>
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn class="button">
          <router-link class="lien" to="/login">Connexion</router-link>
          <v-icon>mdi-lock-open-variant</v-icon>
        </v-btn>
      </div>
    </v-col>
    <div class="hidden-md-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on">
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn color="teal darken-2" class="button">
                <router-link class="lien" to="/signup">Inscription</router-link>
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn color="teal darken-2" class="button">
                <router-link class="lien" to="/login">Connexion</router-link>
                <v-icon>mdi-lock-open-variant</v-icon>
              </v-btn></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderHome"
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
