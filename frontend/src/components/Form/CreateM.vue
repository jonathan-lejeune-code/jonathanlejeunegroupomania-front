<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-col class="mt-9">
  <span >Exprimez-vous</span><br>
    <v-text-field
      v-model="DataMessage.title"
      :counter="30"
      :rules="titleRules"
      label="titre"
       prepend-icon="mdi-pencil"
      required
    ></v-text-field>

    <v-textarea
          class="mx-2"
          label="Message"
          v-model="DataMessage.content"
          rows="1"
          :counter="250"
          prepend-icon="mdi-comment"
        ></v-textarea>

    <v-btn
     
      :loading="loading"
      :disabled="loading"
      color="teal"
      outlined
      class="mr-4"
      @click="SendMessage"
    >
      Envoyé
      <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
    </v-btn>

    <v-btn
      color="indigo"
      class="mr-4"
      outlined
      @click="$refs.form.reset()"
    >
      Reset Formulaire

      <v-icon>
          dark
          right
          mdi-reload
      </v-icon>
    </v-btn>

  </v-col>
  </v-form>
</template>

<script>

import axios from "axios";
  export default {
    data: () => ({
      DataMessage: {
        title: null,
        content: null,
      },
      valid: true,
      Title: '',
       titleRules: [
        v => !!v ,
        v => (v && v.length <= 30) ,
      ],
      
      
    }),

    methods: {
       SendMessage() { //je récupère est envoie ce dont j'ai besoin pour créer un message
  const formData = new FormData();
  formData.append('title', this.DataMessage.title); //.append créé une clé de valeur en récupérant la valeur des inputs (name = 'title' value='this.DataMessage...')
  formData.append('content', this.DataMessage.content);
if (formData.get("title") !== null && formData.get("content") !== null
     //.get renvoie la valeur associé a une clé créé précédement (ex: valeur de 'title' est le resulat de this.datamessage.title)   
      ) {
        axios
          .post("http://localhost:3000/api/messages", formData,{ //je récupère les éléments que je souhaite poster
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token") //je récupère la clé présent dans le local storage
            }
          })
          .then(response => {
              console.log(response);
              document. location. href="http://localhost:8080/message"; //si tout est ok je recharge la page et j'affiche ensuite mon message
          })
          .catch(error => console.log(error));
      }  else {
        console.log("oops !");
      }
    },

      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style lang="scss" scoped>
span { /*titre, contenu... en gras */
  
  font-weight: bold;
  font-size: 30px;
}
</style>