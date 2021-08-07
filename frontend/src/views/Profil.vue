<template>
<v-app>
    <HeaderProfil></HeaderProfil>
     <v-main class="white">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
              color="teal  darken-4"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
              color="teal  darken-4"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
              color="teal  darken-4"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

   <Footer></Footer>

</v-app>    
</template>

<script>
import HeaderProfil from '../components/HeaderProfil.vue'

import Footer from '../components/Footer.vue'
export default {
    name: 'HomeSignup',
    components: {
    HeaderProfil,
   
    Footer,
    }
}
</script>


<style scoped lang="scss">


</style>