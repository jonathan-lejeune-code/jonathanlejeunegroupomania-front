<template>
<v-app>
    <HeaderForm></HeaderForm>
    <v-main>
        <div class=" Form d-flex flex-column align-items-center">
            <h2 class="H2 text-center subtitle pt-5 pb-4">Connexion</h2>
            <p class="P text-center font-italic">Connectez-vous pour accéder au forum !</p>
            <ConnexionForm/>
        </div>
    </v-main>

    <Footer></Footer>
    
</v-app>
</template>

<script>
import HeaderForm from '../components/HeaderForm.vue'
import ConnexionForm from '../components/ConnexionForm'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeLogin',
  components: {
    HeaderForm,
  ConnexionForm,
  Footer
    }
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
    height:800px;
}
</style>
