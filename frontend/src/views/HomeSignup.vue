<template>
<v-main>
    <div class="d-flex flex-column align-items-center">
        <HeaderForm></HeaderForm>
        <h2 class="text-center subtitle pt-5 pb-4">Inscription</h2>
        <p class="text-center font-italic">Inscription rapide et simple au forum !</p>
        <InscriptionForm/>
    </div>
    <Footer></Footer>
</v-main>    
   
   
    
</template>

<script>
import HeaderForm from '../components/HeaderForm.vue'
import InscriptionForm from '../components/InscriptionForm'
import Footer from '../components/Footer.vue'
export default {
    name: 'HomeSignup',
    components: {
    HeaderForm,
    InscriptionForm,
    Footer,
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
</style>