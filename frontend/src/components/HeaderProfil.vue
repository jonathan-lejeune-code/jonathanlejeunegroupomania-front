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

      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="white"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="46"
      ></v-avatar>
    </v-app-bar>
</template>

<script>
export default {
  name: "Headerprofil",

   data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Deconnexion',
      ],
    }),
};
</script>


<style scoped lang="scss">
.logo{
    display: block;
    margin-left: auto;
    margin-right: auto
}


</style>