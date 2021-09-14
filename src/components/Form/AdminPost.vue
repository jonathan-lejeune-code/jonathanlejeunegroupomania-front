<template>
  <div class="field">
    <div class="content">
      <h3>Groupomania Users publications</h3>
      <hr />

      <div
        class="card"
        v-for="publication in publications"
        :key="publication.id"
      >
        <span class="title font-weight-bold"
          >Publié par : {{ publication.User.username }}</span
        >
        <br />

        <span class="title font-weight-bold"
          >publication : {{ publication.content }}</span
        >
        <br />

        <BlobImage :blob="publication.attachment.data" />
        <p class="title font-weight-bold">
          créée le : {{ publication.createdAt }}
        </p>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BlobImage from "../BlobImage.vue";
export default {
  name: "AdminPost",
  components: {
    BlobImage,
  },
  data() {
    return {
      user: "",
      users: [],
      error: "",
      publications: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/admin", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("publication", response.data);
        this.publications = response.data.publications;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
h3 {
  font-size: 1.9em;
  color: #d1515a;
}
</style>