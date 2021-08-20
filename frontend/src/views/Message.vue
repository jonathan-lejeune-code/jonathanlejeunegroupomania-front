<template>
  <v-app id="inspire">
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row >
        <v-col >
          <CardProfil />
        </v-col>
        <v-col>
        <h1>Fil d'actualité</h1>
         <v-card
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
        color="white"
      >
        mdi-google
      </v-icon>
      <span class="text-h6 font-weight-light">Groupi</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1" color="teal">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1" color="red">
            mdi-heart-broken
          </v-icon>
          <span class="subheading">45</span>
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
      dataMessage: {
        title: null,
        content: null,
        selectedFile: null,
      },
      dataComment: {
        content: null,
      },

      posts: [], //je récupère les infos des messages
      member: [], //je récupère les infos de la personnes connectée
    };
  },

  mounted() {
    // je récupère les données du profil connecté
    axios
      .get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log("réponse API", response);
        this.member = response.data;
      })
      .catch((error) => console.log(error));
    //},
    axios
      .get(
        "http://localhost:3000/api/messages", //je récupère les messages postés

        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"), //je récupère la clé présent dans le local storage
          },
        }
      )

      .then((response) => {
        console.log(response);
        this.posts = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    SendMessage() {
      //je récupère est envoie ce dont j'ai besoin pour créer un message
      const formData = new FormData();
      formData.append("title", this.dataMessage.title); //.append créé une clé de valeur en récupérant la valeur des inputs (name = 'title' value='this.dataMessage...')
      formData.append("content", this.dataMessage.content);
      formData.append("inputFile", this.dataMessage.selectedFile);
      if (
        formData.get("title") !== null &&
        formData.get("content") !== null
        //.get renvoie la valeur associé a une clé créé précédement (ex: valeur de 'title' est le resulat de this.datamessage.title)
      ) {
        axios
          .post("http://localhost:3000/api/messages", formData, {
            //je récupère les éléments que je souhaite poster
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"), //je récupère la clé présent dans le local storage
            },
          })
          .then((response) => {
            console.log(response);
            document.location.href = "http://localhost:8080/message"; //si tout est ok je recharge la page et j'affiche ensuite mon message
          })
          .catch((error) => console.log(error));
      } else {
        console.log("oops !");
      }
    },
    onFileChanged(event) {
      //me permet de charger un fichier (une image) au click
      this.dataMessage.selectedFile = event.target.files[0];
      console.log(this.dataMessage.selectedFile);
    },
    DeleMessage(id, userIdOrder) {
      //'jenvoie l'id du message selectionné ainsi que l'id de la personne qui a créé le message
      if (window.confirm("Voulez vous vraiment supprimer le post?"))
        axios
          .delete("http://localhost:3000/api/messages/" + id, {
            data: { userIdOrder }, //je récupère les éléments que je souhaite poster
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"), //je récupère la clé présent dans le local storage
            },
          })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.log(error));
    },
    createComment(messageId) {
      if (this.dataComment.comment !== null) console.log(this.dataComment);
      {
        axios
          .post(
            "http://localhost:3000/api/messages/comments",
            {
              content: this.dataComment.content,
              messageId: messageId,
            },

            {
              //je récupère les éléments que je souhaite poster
              headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"), //je récupère la clé présent dans le local storage
              },
            }
          )
          .then((response) => {
            console.log(response);
            document.location.href = "http://localhost:8080/message"; //si tout est ok je recharge la page et j'affiche ensuite le fil d'actualité
          })
          .catch((error) => console.log(error));
      }
    },
    DeleteComment(id, userIdOrder) {
      //'jenvoie l'id du commentaire selectionné ainsi que l'id de la personne qui a créé le commentaire
      if (window.confirm("Voulez vous vraiment supprimer le commentaire?"))
        axios
          .delete("http://localhost:3000/api/messages/comments/" + id, {
            data: { userIdOrder }, //je récupère les éléments que je souhaite poster
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"), //je récupère la clé présent dans le local storage
            },
          })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>>
