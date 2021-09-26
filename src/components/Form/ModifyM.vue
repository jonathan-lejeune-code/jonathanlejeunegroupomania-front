<template>
  <div>
    <h3>Modifier quelque chose :</h3>
    <br />
    <v-container class="field">
      <form @submit.prevent="editPost">
        <div class="control">
          <v-textarea
            class="textarea"
            id="newText"
            cols="55"
            rows="5"
            outlined
            color="teal darken-2"
            counter
            v-model="editedPost.content"
            label="Modifiez votre message"
          ></v-textarea>
          <br />
        </div>

        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              id="inputFile"
              name="inputFile"
              accept=".png, .jpg, .jpeg"
              @change="selectFile"
            />
          </label>
        </div>

        <input type="submit" class="button button is-dark" value="Envoyer" />
      </form>
    </v-container>
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
            this.$router.push("/message");
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
    },
  },
};
</script>
<style scoped>
h3 {
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #00796b;
  font-size: 30px;
}

.button {
  background-color: #00796b;
  color: #ffff;
  margin-top: 10px;
  width: 100px;
  height: 50px;
  font-size: 1.3em;
}

.field {
  margin-top: 100px;
  margin-bottom: 50px;
}
.card {
  max-width: 600px;
  margin: 100px auto;
}
/* .textarea,
.file-input {
  border: solid teal 2px;
  border-radius: 10px;
  padding: 5px;
} */
@media screen and (min-width: 320px) and (max-width: 500px) {
  .card {
    margin: 10px;
  }
}
</style>