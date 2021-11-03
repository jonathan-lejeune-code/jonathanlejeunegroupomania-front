<template>
  <v-app id="inspire">
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row>
        <v-col md="4">
          <CardProfil />
        </v-col>

        <div id="wall" class="wall">
          <h1 class="titre title">Partager les publications :</h1>

          <div class="field" id="pubForm">
            <div class="card" v-for="publication in allPublications" :key="publication.id">
              <div class="ContentPost">
                <h2>{{ publication.title }}</h2>
                <BlobImage alt="" class="Imgpost" :blob="publication.attachment.data" />
                <p class="pcontent">{{ publication.content }}</p>
                <div class="FooterPost">
                  Publié par <em>{{ publication.User.username }}</em> le
                  <em>{{ dateFormat(publication.createdAt) }}</em> à
                  <em>{{ publication.updatedAt }}</em>
                </div>
                <footer class="card-footer">
                  <v-btn
                    icon
                    href="#"
                    class="card-footer-item"
                    v-if="publication.UserId == user.id || user.isAdmin == true"
                    ><router-link
                      :to="{
                        name: 'modifyMessage',
                        params: { id: publication.id }
                      }"
                    >
                      <v-icon color="white">mdi-pencil-circle</v-icon>
                    </router-link>
                  </v-btn>

                  <v-btn
                    icon
                    color="red"
                    href="#"
                    class="card-footer-item"
                    v-if="publication.UserId == user.id || user.isAdmin == true"
                    @click.prevent="() => deletePost(publication.id)"
                  >
                    <v-icon>mdi-delete-sweep</v-icon>
                  </v-btn>
                </footer>
              </div>
              <commentaire v-bind:postId="publication.id" />
            </div>
          </div>
        </div>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardProfil from "../components/CardProfil.vue";
import BlobImage from "../components/BlobImage.vue";
import commentaire from "../components/Comment.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
    CardProfil,
    BlobImage,
    commentaire,
    Footer
  },
  data() {
    return {
      user: "",
      allPublications: [],
      likes: 0,
      hasBeenLiked: false
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/auth", {
        headers: { Authorization: "Bearer " + localStorage.token }
      })
      .then(response => (this.user = response.data.user))
      .catch(err => console.log(err));
  },
  methods: {
    loadPosts() {
      axios
        .get("http://localhost:3000/api/publications", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log("publication", response.data);
          this.allPublications = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    deletePost(id) {
      const post_id = this.allPublications.findIndex(publication => publication.id === id);
      if (post_id !== -1) {
        this.allPublications.splice(post_id, 1);
        axios
          .delete("http://localhost:3000/api/publications/" + id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          })
          .catch(error => console.log(error));
      }
    },

    onSubmit() {
      this.loadPosts();
    },

    // Fonction pour mettre en format FR la date
    dateFormat(date) {
      const event = new Date(date);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return event.toLocaleDateString("fr-FR", options);
    }
  },
  mounted() {
    this.loadPosts();
  }
};
</script>

<style lang="scss" scoped>
.titre {
  font-weight: bold;
  color: #091f43;
  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }
}
.wall {
  width: 700px;
  background-color: #d3676f;
  height: 860px;
  padding: 10px;
  overflow-y: scroll;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
}

h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}
.card {
  margin-top: 15px;
  margin-bottom: 20px;
}
h2 {
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 10px;
  margin-bottom: 20px;
}
.pcontent {
  padding: 5px;
  overflow-wrap: break-word;
  font-size: 18px;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
}
.Imgpost {
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.ContentPost {
  background-color: #091f43;
  width: 100%;
  height: auto;
}
.FooterPost {
  color: white;
  font-size: 12px;
  margin-left: 20px;
}
textarea {
  width: 90%;
  border: 2px solid none;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 7px;
  box-shadow: 1px 2px 2px 2px #091f43;
}
.com {
  border: #091f43 3px solid;
  border-radius: 10px;
  background-color: #bdbdbd;
}
.titlecom {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}
.pcom {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
}
.pcom1 {
  font-weight: 900;
  font-size: 9px;
}
footer {
  margin-left: 10px;
}
</style>
