<template>
  <div class="field">
    <form @submit.prevent="editPost">
      <div class="control">
        <textarea
          class="textarea"
          id="newText"
          cols="55"
          rows="5"
          v-model="editedPost.content"
          placeholder="Modifiez votre message"
        ></textarea>
        <br />
      </div>

      <div class="file">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="inputFile"
            id="inputFile"
            @change="selectFile"
          />
        </label>
      </div>

      <input type="submit" class="button button is-dark" value="Envoyer" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ModifyM",
  data() {
    return {
      editedPost: {
        id: "",
        content: "",
        attachment: "",
      },
      message: "",
      allPublications: [],
      props: {
        default: true,
        publication: (route) => ({ search: route.query.q }),
      },
    };
  },
  methods: {
    editPost() {
      let newMessage = document.getElementById("newText").value;
      let newContent = false;
      if ((newMessage == this.editedPost.content) != false) {
        newContent = true;
      }
      const id = this.$route.params.id;
      console.log(this.$route);
      if (newContent) {
        axios
          .put(
            "http://localhost:3000/api/publications/" + id,
            {
              content: this.editedPost.content,
              attachment: this.editedPost.attachment,
              postId: this.editedPost.id,
            },
            {
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then(() => {
            this.message === "";
            this.$router.push("/wall");
          })
          .catch(() => {
            console.log("erreur de modification");
          });
      } else {
        console.log("aucune modification");
      }
    },
    selectFile(evt) {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        this.editedPost.attachment = evt.target.result;
      };
      // To enable reuploading of same files in Chrome
      document.querySelector("#inputFile").value = "";
    },
  },
};
</script>
<style scoped>
.field {
  margin-top: 100px;
  margin-bottom: 50px;
}
.card {
  max-width: 600px;
  margin: 100px auto;
}
@media screen and (min-width: 320px) and (max-width: 500px) {
  .card {
    margin: 10px;
  }
}
</style>