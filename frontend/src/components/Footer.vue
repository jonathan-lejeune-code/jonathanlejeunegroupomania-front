<template>
<div class="py-3 footer-bg d-flex flex-column align-items-center">
  <div class="row d-flex justify-content-around w-100">
      <a class="mx-2" href='#'>Mentions légales</a> |
      <a class="mx-2" href='mailto:groupomania@contact.com'>Contact</a>
  </div>
  <div class="row d-flex justify-content-around mt-2 text-company w-100">
      <p>Site internet créé par CONNECT-E</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>


<style scoped lang="scss">
a{
  color:#fff;
    &:hover{
      text-decoration: underline;
      font-weight: bold;
    }
}
.footer-bg{
  background-color: red;
  position:absolute;
  bottom:0;
  width:100%;
}
.text-company{
  font-size: 0.5rem;
  color:#fff;
}
</style>