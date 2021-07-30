<template>
  <div class="bg-header">
    <div class="d-flex flex-column justify-content-around pt-4">
      <h1 class="main-title py-5">
        <span class="font-weight-bold text-uppercase title-size"
          >Grouposcord</span
        ><br />
        Ecrire, lire et partager
      </h1>
      <div>
        <img
          class="logo-title"
          src="../assets/icon-above-font.png"
          alt="Icone de Groupomania"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style scoped lang="scss">
.main-title {
  font-size: 1.5rem;
  color: #fff;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.logo-title {
  width: 12rem;
}
.bg-header {
  background-image: url("../assets/fern.jpg");
}
.bg-header-color {
  background-color: #f0e8c7;
}
.title-size {
  font-size: 2.1rem;
}
</style>