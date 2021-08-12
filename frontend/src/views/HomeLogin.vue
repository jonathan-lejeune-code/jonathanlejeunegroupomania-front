<template>
<v-app id="main">
    <HeaderForm></HeaderForm>
    <v-main>
        <div class=" Form d-flex flex-column align-items-center">
            <h2 class="H2 text-center subtitle pt-5 pb-4">Connexion</h2>
            <p class="P text-center font-italic">Connectez-vous pour accéder au forum !</p>
            <ConnexionForm/>
        </div>

        <v-img
          alt="logo groupomania"
          class="imggroupe"
          contain
          min-width="100"
          src="../assets/desk.jpg"
          width="600px"
          height="500px"
        />
    </v-main>

    <Footer></Footer>

</v-app>
</template>

<script>
import axios from "axios";
import HeaderForm from '../components/HeaderForm.vue'
import ConnexionForm from '../components/ConnexionForm'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeLogin',
  components: {
    HeaderForm,
  ConnexionForm,
  Footer
    },
    data() {
    return {
      dataLogin: {
        email: null,
        password: null,
      },
      msg:""
    };
  },
  methods: {
    logIn() {
  
    if (
        this.dataLogin.email ==null ||
        this.dataLogin.password ==null 
      )
      { this.msg ="ERREUR DE SAISIE"}
      {
        axios
          .post("http://localhost:3000/api/auth/login", this.dataLogin)
          .then(response => {
              console.log(response);
              localStorage.setItem('token',response.data.token)
              document. location. href="http://localhost:8080/message"; 
          })
          .catch(error => console.log(error));
      } 
    }
  }
}
</script>


<style scoped lang="scss">

#main{
    background-color:#A5D6A7;
}
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
    margin-right: auto
}
</style>
