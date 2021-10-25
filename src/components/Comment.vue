<template>
  <div class="d-flex flex-column container-fluid">
    <div>
      <div class="container">
        <form action="">
          <div>
            <div class="card text-center">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    color="teal darken-2"
                    class="white--text"
                    v-on:click="getCom(postId)"
                  >
                    commentaire
                  </v-expansion-panel-header>
                  <v-expansion-panel-content color="grey lighten-2">
                    <div>
                      <form @submit.prevent="postCom(postId)" action="" class="cote">
                        <input
                          v-model="newCom.comments"
                          type="text"
                          name="comments"
                          class="container-fluid form"
                          placeholder="Ecrire un commentaire.."
                        />
                        <button type="submit" class="plane m-2">
                          <v-icon color="white">mdi-send</v-icon>
                        </button>
                      </form>
                    </div>

                    <v-card
                      class="mx-auto my-2 rounded-xl "
                      height="auto"
                      width="60%"
                      max-width="544"
                      v-for="comments in AllComment"
                      :key="comments.id"
                    >
                      <v-card-text class="pa-0">
                        <div>Commentaire de: {{ comments.User.username }}</div>
                        <p class="text-subtitle-1 mb-0 text--primary">
                          {{ comments.comments }}
                        </p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          icon
                          @click="deleteCom(postId, comments.id)"
                          v-if="comments.userId == user.id || user.isAdmin == true"
                          color="teal darken-2"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "comment",
  props: ["postId"],
  data: function() {
    return {
      AllComment: [],
      newCom: {
        comments: ""
      }
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
    //Récupération d'un commentaire
    getCom(postId) {
      axios
        .get(`http://localhost:3000/api/publications/${postId}/comments`, {
          headers: { Authorization: "Bearer " + localStorage.token }
        })

        .then(response => {
          console.log(response);
          this.AllComment = response.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //Envoie d'un commentaire
    postCom(id) {
      axios
        .post(`http://localhost:3000/api/publications/${id}/comment`, this.newCom, {
          headers: { Authorization: "Bearer " + localStorage.token }
        })
        .then(response => console.log(response), alert("Message envoyé"), window.location.reload())
        .catch(error => console.log(error));
    },
    //Supression d'un commentaire
    deleteCom(postId, id) {
      axios
        .delete(`http://localhost:3000/api/publications/${postId}/comments/${id}`, {
          headers: { Authorization: "Bearer " + localStorage.token }
        })
        .then(result => {
          alert("Votre commentaire a bien été supprimé"), window.location.reload();
          result.json().then(response => {
            console.warn(response);
          });
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.card-body {
  padding: 10px;
  background-color: orchid;
  width: 200px;
  height: auto;
}
.author {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.card-text {
  padding-bottom: 5px;
  color: black;
}

.form {
  width: 50%;
  border: teal solid 2px;
  background-color: white;
  margin: 5px 5px;
}

.container {
  border: teal solid 5px;
  margin-top: 10px;
}
.icon {
  color: white;
}
.card {
  border-radius: 4px;
  background-color: #e0e0e0;
  object-fit: contain;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.textarea {
  margin-right: 10px;
}
.pink {
  background-color: rgb(255, 215, 215);
  border-radius: 15px;
}
.cote {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4px;
  object-fit: contain;
}

.white {
  background-color: white;
}
.plane {
  background-color: teal;

  margin-top: 5px;
  border-style: none;
  font-size: 1em;
  border-radius: 15px;
  width: 65px;
  height: 30px;
}
</style>
