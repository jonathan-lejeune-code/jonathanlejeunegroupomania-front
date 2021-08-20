<template>
<v-app>
    <HeaderForm></HeaderForm>
    <v-main>
        <div class="Form d-flex flex-column align-items-center ">
            <h2 class=" H2 text-center subtitle pt-5 pb-4">Inscription</h2>
            <p class="P text-center font-italic">Inscription rapide et simple au forum !</p>
            <InscriptionForm/>
        </div>
     <v-img
          alt="image bureau"
          class="imggroupe"
          contain
          max-height="500"
          max-width="500"
          src="../assets/unnamed.jpg"
          
        />
    </v-main>    

   <Footer></Footer>

</v-app>    
</template>

<script>
import axios from "axios";
import HeaderForm from '../components/Header/HeaderForm.vue'
import InscriptionForm from '../components/Form/InscriptionForm.vue'
import Footer from '../components/Footer/Footer.vue'
export default {
    name: 'HomeSignup',
    components: {
    HeaderForm,
    InscriptionForm,
    Footer,
    },
    data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  
  methods: {
    /**
     * Permet de poster les donnees saisie par utilisateur
     */
    createUser() {
      this.submited = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const username = document.querySelector("#username").value;
        let users = {
          email: email,
          password: password,
          username: username,
        };
        
        // Verifie que utilisateur a bien remplie tout les champs
        if (users.email == "" || users.password == "" || users.username == "") {
          users = {
            userVerification: false,
          };
        }
         // Permet d'envoyer les information pour la creation d'un profil
        axios
          .post(this.$localhost + "api/auth/signup", users)
          .then((res) => {
            console.log(res);
            this.$router.push("/login");
          })
          .catch((error) => {
            console.log(error);
            document.getElementById("notfound").innerHTML =
              "Une erreur est survenue, veuillez réessayer ultérieurement";
          });
      }
    },
  },
    
}
</script>


<style scoped lang="scss">

.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color:teal;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}

.H2{
    font-size: 50px;
}

.P{ 
    font-size: 20px;
}
.Form{
    height:auto;
}

.imggroupe{
  display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
}
</style>