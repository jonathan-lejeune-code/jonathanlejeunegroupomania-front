<template>
  <v-app id="inspire">
    <HeaderProfil />

    <v-main>
      <div class="container1">
        <div class="form-group">
          <label for="inputTitle"><span>Titre</span> </label><br />
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            v-model="dataMessage.title"
          />
        </div>

        <div class="form-group">
          <label for="inputContent"><span>Exprimez-vous</span></label
          ><br />
          <textarea
            id="inputContent"
            v-model="dataMessage.content"
            style="height: 100px"
          ></textarea>
        </div>
        <label for="inputFile"><span class="cacher">aaaa</span></label>
        <div class="btn-upload">
          <input
            name="inputFile"
            type="file"
            class="upload"
            id="inputFile"
            @change="onFileChanged"
          />
        </div>

        <v-btn
          @click.prevent="SendMessage"
          type="submit"
          class="btn-publier"
          large
        >
          <span class="cacher">aaaa</span>
          <v-icon class="mdi-pencil">mdi-pencil</v-icon>
        </v-btn>
      </div>

      <div class="container2">
        <div class="test">
          <h1>Fil d'actualité</h1>
          <v-card class="mx-auto" color="teal" dark min-width="350">
            <v-card-title>
              <v-icon large left> mdi-message</v-icon>
              <span class="text-h6 font-weight-light">Groupi</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold"> "" </v-card-text>

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
                  <v-list-item-title>MJ</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn class="ma-9" text icon color="blue lighten-2">
                    <v-icon class="mr-1">mdi-thumb-up </v-icon>
                    <span class="subheading mr-2">256</span>
                  </v-btn>
                  <v-btn class="ma-2" text icon color="red lighten-2">
                    <v-icon class="mr-1"> mdi-thumb-down </v-icon>
                    <span class="subheading mr-2"></span>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import HeaderProfil from "../components/HeaderProfil.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Message",
  components: {
    HeaderProfil,
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
