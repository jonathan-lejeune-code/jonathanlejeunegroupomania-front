<template>
  <v-app id="inspire">
    <HeaderProfil />

    <v-main>
      <!--  -->
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

      <v-btn @click.prevent="SendMessage" type="submit" class="btn-publier" large >
        <span class="cacher">aaaa</span>
        <v-icon class="mdi-pencil">mdi-pencil</v-icon>
      </v-btn>

      <div class="container2">
        <div class="test">
          <h1>Fil d'actualité</h1>
          <ul id="example-1">
            <li v-for="item in posts" :key="item.id">
              <span>{{ item.title }}<br /></span>
              <p v-if="item.User.attachementuser">
                <img
                  class="photoprofil"
                  :src="item.User.attachementuser"
                  alt="..."
                /><br />
              </p>
              <i
                >Publié par <strong>{{ item.User.username }}</strong> le
                {{ item.createdAt.split("T")[0] }} à
                {{ item.createdAt.slice(11, 16) }}<br /><br
              /></i>
              <div class="contenu">{{ item.content }} <br /></div>
              <!-- Id du posteur : {{ item.userId }} -->
              <p v-if="item.attachement">
                <img :src="item.attachement" alt="..." />
              </p>
              <!-- j'affiche l'image uniquement si il y en a une-->
              <p v-if="member.id == item.userId || member.isAdmin">
                <button
                  @click.prevent="DeleMessage(item.id, item.userId)"
                  id="btn-sup"
                  type="submit"
                  class="btn btn-primary"
                >
                  <span class="cacher">aaaa</span
                  ><i class="fas fa-trash-alt"></i>
                </button>
              </p>
              <!--le bouton Supprimer s'affiche uniquement si la personne connectée est la personne qui a publié le message ou un admin-->
              <!--partie création commentaire -->

              <textarea
                type="text"
                id="comment"
                name="comment"
                class="form-control"
                v-model="dataComment.content"
                placeholder="Insérer votre commentaire..."
              ></textarea>
              <a v-on:click="createComment(item.id)"
                ><i class="fas fa-comment" title="Envoyer"></i
              ></a>
              <div class="container3">
                <ul id="example-2">
                  <!--partie affichage commentaire -->
                  <li v-for="comment in item.Comments" :key="comment.id">
                    <i
                      ><strong>{{ comment.User.username }}</strong> le
                      {{ comment.createdAt.split("T")[0] }} à
                      {{ comment.createdAt.slice(11, 16) }}</i
                    ><br />
                    {{ comment.content }}<br />
                    <p v-if="member.id == comment.userId || member.isAdmin">
                      <button
                        @click.prevent="
                          DeleteComment(comment.id, comment.userId)
                        "
                        id="btn-sup"
                        type="submit"
                        class="btn btn-primary"
                      >
                        <span class="cacher">aaaa</span
                        ><i class="fas fa-trash-alt"></i>
                      </button>
                    </p>
                  </li>
                  <!--le bouton Supprimer s'affiche uniquement si la personne connectée est la personne qui a publié le commentaire ou un admin-->
                </ul>
                -
              </div>
            </li>
          </ul>
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
  margin-left: auto;
  margin-right: auto;
}

.profilsansphoto {
  color: blue;
  position: absolute;
  right: 60px;
}

.container2 .photoprofil {
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
.test li {
  /*liste contenant les contenus, titre...*/
  background-color: #f2f2f2;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid none;
  border-radius: 8px;
  box-shadow: 1px 1px 2px #555;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  width: 60%;
}

.mdi-pencil {
  font-size: 30px;
}

.container3 li {
  margin-top: 10px;
  background-color: white;
}

.container2 img {
  /*image publié par les utilisateurs */
  width: 350px;
  height: 340px;
  border: 2px solid none;
  border-radius: 20px;
}

#btn-sup,
.btn-publier {
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
