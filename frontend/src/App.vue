<template>
  <v-app>
    <v-app-bar app color="teal darken-4" dark>
      <div class="d-flex align-center">

        <v-img
          alt="logo groupomania"
          class="logo"
          contain
          min-width="100"
          src="./assets/icon-left-font-monochrome-white.png"
          width="400"/>
      </div>

        <v-btn >
        <span>Inscription</span>

       <v-icon>mdi-account</v-icon>
      
       </v-btn>

       <v-btn>
       <span>Connexion</span>

       <v-icon>mdi-lock-open-variant</v-icon>
       </v-btn>
      
    </v-app-bar>
    
    <v-main> 
      <h1>Grouposcord</h1>

      <p>Le réseaux social qui lie tout les employé </p>
      <router-view></router-view> 

      <v-img
          alt="logo groupomania"
          class="imggroupe"
          contain
          min-width="100"
          src="./assets/group.jpg"
          width="800px"
          height="600px"
        />

    </v-main>

   <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal darken-4">
        <strong class="subheading">Gardez contact avec vos collégue ! </strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Grouposcord</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }

</script>


<style lang="scss" scoped>

.logo{
  display: block;
    margin-left: auto;
    margin-right: auto
}

.v-btn{
  color: white;
  margin-left: 20px;
}

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