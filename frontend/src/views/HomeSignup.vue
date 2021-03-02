<template>
<div class="d-flex flex-column align-items-center">
    <h2 class="text-center subtitle pt-5 pb-4">Inscription</h2>
    <p class="text-center font-italic">Inscription rapide et simple au forum !</p>
    <InscriptionForm/>
</div>
</template>

<script>
import InscriptionForm from '../components/InscriptionForm'
export default {
    name: 'HomeSignup',
    components: {
    InscriptionForm   
    }
}
</script>


<style scoped lang="scss">
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color:red;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>