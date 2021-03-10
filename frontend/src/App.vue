<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">

        <v-img
          alt="logo groupomania"
          class="logo"
          contain
          min-width="100"
          src="./assets/icon-left-font-monochrome-white.png"
          width="400"
          
        />
      </div>

        <v-btn>
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
  </v-app>
</template>

<script>

import Footer from './components/Footer'

export default {
  name: "App",

  data: () => ({
    value: 1,
    icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
  }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  };

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