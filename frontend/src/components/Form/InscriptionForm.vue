<template>
<v-row justify="center">
  <v-form
  
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      prepend-icon="mdi-email-edit-outline"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Pseudo"
      prepend-icon="mdi-format-text-variant-outline"
      required
    ></v-text-field>

      <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-15-5"
            label="Mot de passe"
            hint="Minimum 8 caractére"
            prepend-icon="mdi-form-textbox-password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

     <v-file-input
    id="inputFile"
    accept="image/*"
    label="image"
    @change="onFileChanged"
  ></v-file-input>

    <v-btn
     
      :loading="loading"
      :disabled="loading"
      color="teal"
      outlined
      class="mr-4"
      @click="sendSignup"
    >
      Enregistrez-vous
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

   
  </v-form>
</v-row>
</template>


<script>
import axios from "axios";
  export default {
      name: 'InscriptionForm',
    data () {
      return {
        email: '',
        emailRules: [
        v => !!v || 'E-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'email doit être valide',
      ],
        name: '',
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Obligatoire',
          min: v => v.length >= 8 || 'Minimum 8 caractére',
          emailMatch: () => (`L'email et le mot de passe que vous avez entrés ne correspondent pas`),
        },
         photo: '',

          }
    },

         methods: {
      sendSignup () {
        const formData = new FormData();
  formData.append('username', this.name);
  formData.append('email', this.email);
  formData.append('password', this.password);
  formData.append('inputFile', this.selectedFile);
if (formData.get("email") !== null & formData.get("name") !== null & formData.get("password") !== null) 
 { this.msg ="ERREUR DE SAISIE"}

  {
        axios
          .post("http://localhost:3000/api/auth/signup", formData)
          .then(response => {
            console.log(response); //une fois le compte enregistré on remet les inputs "à 0"
            //Réinitialisation
            this.email = null;
            this.name = null;
            this.password = null;
            document. location. href="http://localhost:8080/login";
          })
          .catch(error => console.log(error));
      } 
    
        
      },

       onFileChanged (event) { //me permet de charger un fichier (une image) au click
    this.dataSignup.selectedFile = event.target.files[0];
    console.log(this.dataSignup.selectedFile)
  },
      reset () {
        this.$refs.form.reset()
      },
      
    },
     
  }

  
</script>

