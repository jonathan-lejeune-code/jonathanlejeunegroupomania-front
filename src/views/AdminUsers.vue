<template>
  <div class="container forms">
    <hr />
    <AdminUsers />
  </div>
</template>

<script>
import AdminUsers from "../components/Form/AdminUser.vue";
export default {
  name: "AdminUsers",
  components: {
    AdminUsers,
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
  font-size: 10px;
}
</style>