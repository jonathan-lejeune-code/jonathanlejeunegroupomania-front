<template>
     <v-app-bar
      app
      color="teal darken-4"
      dark
      flat
    >
    <v-img
          alt="logo groupomania"
          class="logo"
          contain
          min-width="100"
          src="../assets/icon-left-font-monochrome-white.png"
          width="400"/>

      

      <v-tabs
        centered
        class="ml-n9"
        color="white"
      >
      
      </v-tabs>

      <div class="BoutonDisconect"> <disconectbtn/> </div>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="46"
      ></v-avatar>
    </v-app-bar>
</template>

<script>
import disconectbtn from '@/components/disconectbtn.vue'; //j'appel ma fonction déconnexion
export default {
  name: "Headerprofil",
   components :{disconectbtn,
   },

   data: () => ({
     
    }),
};
</script>


<style scoped lang="scss">
.logo{
    display: block;
    margin-left: auto;
    margin-right: auto
}

.BoutonDisconect{
  position: absolute;
  right: 12px;
  top: 1px;
}


</style>