<template>
  <v-app id="inspire">
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row>
        <v-col>
          <CardProfil />
        </v-col>
        <v-col>
          <h1>Fil d'actualité</h1>
          <v-card color="#26c6da" dark max-width="400" class="">
            <v-card-title>
              <v-icon large left color="white"> mdi-google</v-icon>
              <span class="text-h6 font-weight-light">
                : {{ publication.title }}</span
              >
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              " {{ publication.content }}"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title
                    >Groupi de :{{
                      publication.User.username
                    }}</v-list-item-title
                  >
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1" color="teal"> mdi-heart </v-icon>
                  <span class="subheading mr-2">256</span>
                  <v-btn
                    class="ma-2"
                    text
                    icon
                    color="red "
                    alt="supprimer"
                    @click.prevent="() => deletePost(publication.id)"
                  >
                    <v-icon>mdi-delete-sweep</v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderProfil from "../components/Header/HeaderProfil.vue";
import CardProfil from "../components/CardProfil.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
    CardProfil,
    Footer,
  },
  data() {
    return {
      user: "",
      publication: {
        User: "",
        id: "",
        title: "",
        content: "",
        UserId: "",
      },
      allPublications: [],
      likes: 0,
      hasBeenLiked: false,
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
</style>>
