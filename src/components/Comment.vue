<template>
  <div class="d-flex flex-column container-fluid">
    <div>
      <div class="container">
        <form action="">
          <div>
            <div class="card text-center">
              <div>
                <!-- <form @submit.prevent="postCom(postId)" action="" class="cote">
                  <input
                    v-model="newCom.comments"
                    type="text"
                    name="comments"
                    class="container-fluid p-3"
                    placeholder="Ecrire un commentaire.."
                  />
                  <button type="submit" class="plane m-2">
                    envoyé
                  </button>
                </form> -->

                <button v-on:click="getCom(postId)" type="button" class="btn burgundy">
                  get
                </button>
              </div>

              <div class="card-body" v-for="comments in AllComment" :key="comments.id">
                <div class="color">
                  <div class="pink container white">
                    <div class="d-flex row">
                      <div class="d-flex justify-content-start flex-wrap">
                        <p class="author">{{ comments.User.username }}</p>
                      </div>
                      <div class="">
                        <p class="card-text">{{ comments.comments }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="reply px-4" v-if="isAdmin">
                    <small @click="deleteCom(postId, comments.id)">supprimer</small
                    ><span class="dots"></span>
                  </div>
                </div>
              </div>
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
  methods: {
    //Récupération d'un commentaire
    getCom(postId) {
      axios
        .get(`http://localhost:3000/api/publications/${postId}/comments`, {
          headers: { Authorization: "Bearer " + localStorage.token }
        })

        .then(response => {
          console.log(response);
          this.AllComment = response.comments;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    // //Envoie d'un commentaire
    // postCom(id) {
    //   axios
    //     .post(`http://localhost:3000/api/publications/${id}/comment`, this.newCom, {
    //       headers: { Authorization: "Bearer " + localStorage.token }
    //     })
    //     .then(response => console.log(response), alert("Message envoyé"), window.location.reload())
    //     .catch(error => console.log(error));
    // },
    // //Supression d'un commentaire
    // deleteCom(PostId, id) {
    //   fetch(`http://localhost:3000/api/publications/${PostId}/comment/${id}`, {
    //     method: "DELETE",
    //     headers: { Authorization: "Bearer " + localStorage.token }
    //   })
    //     .then(result => {
    //       alert("Votre commentaire a bien été supprimé"),
    //         result.json().then(response => {
    //           console.warn(response), window.location.reload();
    //         });
    //     })
    //     .catch(error => console.log(error));
    // }
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

.container {
  border: teal solid 5px;
  margin-top: 10px;
}
.icon {
  color: white;
}
.card {
  border-radius: 4px;
  background-color: orange;
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
.burgundy {
  background-color: rgb(209, 81, 90);
  color: white;
}
.white {
  background-color: white;
}
.plane {
  background-color: rgb(18, 36, 65);
  color: white;
  border-style: none;
  font-size: 1em;
  border-radius: 15px;
  width: 65px;
  height: 30px;
}
</style>
