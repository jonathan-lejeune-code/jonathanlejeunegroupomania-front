<template>
  <v-app-bar app color="teal darken-4" dark flat>
    <v-img
      alt="logo groupomania"
      class="logo"
      contain
      min-width="100"
       src="\src\assets\icon-left-font-monochrome-white.png"
      width="300px"
    />

    <v-tabs centered class="ml-n9" color="white"> </v-tabs>
    
  </v-app-bar>
</template>

<script>

export default {
  name: "Headerprofil",
  

  data: () => ({}),
};
</script>


<style scoped lang="scss">
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>