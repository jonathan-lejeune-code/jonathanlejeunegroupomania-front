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
            <div
              class="card"
              v-for="publication in allPublications"
              :key="publication.id"
            >
              <div class="ContentPost">
                <H4>{{ publication.title }} </H4>

                <BlobImage :blob="publication.attachment.data" />
                {{ publication.content }}
                <div class="FooterPost">
                  Publié par <em>{{ publication.User.username }}</em> le
                  <em>{{ publication.createdAt.split(" ")[0] }}</em> à
                  <em>{{ publication.updatedAt }}</em>
                </div>
                <footer class="card-footer">
                  <v-btn
                    icon
                    color="red"
                    href="#"
                    class="card-footer-item"
                    v-if="publication.UserId == user.id || user.isAdmin == true"
                    ><router-link
                      :to="{
                        name: 'UpdatePost',
                        params: { id: publication.id },
                      }"
                    >
                      <v-icon>mdi-pencil</v-icon>
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
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
    CardProfil,
    BlobImage,
    Footer,
  },
  data() {
    return {
      user: "",
      publication: {
        User: "",
        id: "",
        content: "",
        attachment: "",
        UserId: "",
      },
      allPublications: [],
      likes: 0,
      hasBeenLiked: false,
      props: {
        default: true,
        publication: (route) => ({ search: route.query.q }),
      },
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/auth", {
        headers: { Authorization: "Bearer " + localStorage.token },
      })
      .then((response) => (this.user = response.data.user))
      .catch((err) => console.log(err));
  },
  methods: {
    setInfos(payload) {
      this.publication = payload.publication;
    },
    loadPosts() {
      axios
        .get("http://localhost:3000/api/publications", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log("publication", response.data);
          this.allPublications = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      this.loadPosts();
    },
    deletePost(id) {
      const post_id = this.allPublications.findIndex(
        (publication) => publication.id === id
      );
      if (post_id !== -1) {
        this.allPublications.splice(post_id, 1);
        axios
          .delete("http://localhost:3000/api/publications/" + id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .catch((error) => console.log(error));
      }
    },
  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style lang="scss" scoped>
.titre {
  color: #122442;
  font-size: 2em;
  @media screen and (max-width: 1000px) {
    font-size: 1em;
  }
}
.wall {
  width: 700px;
  background-color: #bdbdbd;
  min-height: auto;
  padding: 6rem 0 3rem 0;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
}
h1 {
  display: flex;
  justify-content: center;
}

.ContentPost {
  background-color: #64b5f6;
  width: 100%;
  height: auto;
}

.FooterPost {
  color: white;
  font-size: 12px;
}
</style>
