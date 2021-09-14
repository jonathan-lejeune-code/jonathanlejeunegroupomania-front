<template>
  <div>
    <h3>Ecrivez quelque chose :</h3>
    <br />
    <div class="field">
      <form @submit.prevent="createPublication">
        <div class="control">
          <textarea
            class="textarea"
            cols="55"
            rows="1"
            v-model="contentPublication.title"
            placeholder="   titre"
          ></textarea>
          <br />

          <textarea
            class="textarea"
            cols="55"
            rows="5"
            v-model="contentPublication.content"
            placeholder="   Votre message"
          ></textarea>
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
              @change="uploadImage"
            />
            <p class="browse">
              <strong>Formats supportés : .png, .jpg, .jpeg</strong>.
            </p>
          </label>
        </div>

        <input type="submit" class="btnS" value="Envoyer" />
      </form>
    </div>
    <div class="field" id="pubForm">
      <div
        class="card"
        v-for="contentPublication in contentPublications"
        :key="contentPublication.id"
      >
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePublication",
  props: {
    submit: Function,
  },
  data() {
    return {
      wallCount: 0,
      contentPublications: [],
      contentPublication: {
        title: "",
        content: "",
        attachment: "",
      },
      msgError: "",
    };
  },
  methods: {
    createPublication() {
      if (this.contentPublication.content) {
        this.wallCount++;
        const fd = new FormData();
        fd.append("title", this.contentPublication.title);
        fd.append("content", this.contentPublication.content);
        fd.append("inputFile", this.contentPublication.attachment);
        axios
          .post("http://localhost:3000/api/publications", fd, {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
          })
          .then(() => this.submit())
          .catch((error) => (this.msgError = error));
        this.contentPublications.unshift({
          id: this.wallCount,
          title: this.contentPublication.title,
          content: this.contentPublication.content,
          attachment: this.contentPublication.attachment,
        });
        this.contentPublication.content = "";
        this.contentPublication.attachment = "";
        document.location.href = "http://localhost:8080/message";
      }
    },
    uploadImage(evt) {
      const files = evt.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        this.contentPublication.attachment = evt.target.result;
      };
    },
  },
};
</script>

<style>
h3 {
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: teal;
  font-size: 30px;
}
.field {
  display: flex;
  justify-content: center;
}
.button {
  margin-top: 10px;
}
.card {
  text-align: justify;
  width: 400px;
  margin-top: 50px;
}
#pubForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
}
.postImg {
  width: 150px;
}
.btnS {
  background-color: teal;
  color: #ffff;
  margin-top: 10px;
  width: 100px;
  height: 50px;
  font-size: 1.3em;
}

.textarea,
.file-input {
  border: solid teal 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>