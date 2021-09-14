<template>
  <div class="container forms">
    <br />
    <AdminPost />
  </div>
</template>

<script>
import AdminPost from "../components/Form/AdminPost.vue";
export default {
  name: "AdminMessage",
  components: {
    AdminPost,
  },
};
</script>

<style scoped>
.forms {
  display: flex;
  justify-content: center;
  margin-top: 160px;
  margin-bottom: 175px;
  font-size: 15px;
}
.title {
  color: #122442;
}
.field {
  font-size: 20px;
}
</style>