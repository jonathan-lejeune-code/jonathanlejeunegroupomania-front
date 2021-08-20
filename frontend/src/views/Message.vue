<template>
  <v-app id="inspire">
    <HeaderProfil />
    <v-main class="pt-4 ml-4">
      <v-row >
        <v-col>
          <CardProfil />
        </v-col>
      </v-row>
    
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderProfil from "../components/HeaderProfil.vue";
import CardProfil from "../components/CardProfil.vue";
import Footer from "../components/Footer.vue";
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
main {
  background-color: white;
  background-position: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

.container1{
  margin-left: 30px;
  margin-right: auto;
  width: 400px;
  border: solid 5px black;
  border-radius: 10px;
  background-color: white;
}
.profilsansphoto {
  color: blue;
  position: absolute;
  right: 60px;
}
.container2 {
  margin-left: auto;
  width: 600px;
background-color: purple;

}

.form-group{
  width: 200px;
  margin-right: auto;
  margin-left: auto;
}
.photoprofil {
  /*photo profil de la personne qui poste le message*/
  height: 65px;
  width: 65px;
  border-radius: 50px;
  margin-top: 8px;
}

#inputContent,
#inputTitle,
textarea {
  border: 2px solid none;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px black;
}

span {
  /*titre, contenu... en gras */
  font-weight: bold;
  font-size: 25px;
}
.test {
  /*contient le fil d'actualités et le reste des infos*/
  display: flex;
  flex-direction: column;
  background-color: #fffafa;
  /*background-image: url("../assets/icon.png");*/
  background-position: center;
  background-size: 25%;
}

.mdi-pencil {
  font-size: 30px;
}

#btn-sup,
.btn-publier {
  margin-top: 10px;
  padding: 5px;
  font-size: 15px;
  background: linear-gradient(black, teal);
  text-decoration: none;
  color: white;
  border: 0px solid;
  border-radius: 20px;
  cursor: pointer;
}
#btn-sup:hover {
  opacity: 0.8;
  background: linear-gradient(black, red);
  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px black;
  transition-duration: 0.15s;
}
.btn-publier:hover {
  opacity: 0.8;
  background: linear-gradient(green, black);
  text-shadow: 2px 2px 2px black;
  box-shadow: 2px 2px 2px black;
  transition-duration: 0.15s;
}

.cacher {
  /*je cache le texte du bouton pour WAVE*/
  display: none;
}
</style>>
