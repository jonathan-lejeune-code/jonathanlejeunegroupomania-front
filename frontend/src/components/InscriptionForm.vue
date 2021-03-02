<template>
<div class="w-50">
    <form class="py-4">
        <div class="form-group">
            <label for="email">Adresse mail</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
            <label for="username">Pseudo</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-submit-color" v-on:click="signUpUser">Inscription</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'InscriptionForm',
    data() { return {
        email: '',
        username: '',
        password: '',
        photo: ''
        }
    },
    methods: {
        signUpUser() {
            let dataForm = JSON.stringify({email: this.email, username: this.username, password: this.password, photo: this.photo});
            async function signUp(dataForm) {
                try {
                let response = await fetch("http://localhost:3000/api/user/signup", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: dataForm,
                });
                    if (response.ok) {
                        let responseId = await response.json();
                        console.log(responseId);
                    
                    } else {
                        console.error('Retour du serveur : ', response.status);
                    }
                } catch (e) {
                console.log(e);
                }
            }
            signUp(dataForm)
            window.location.href = "http://localhost:8080/signup#/login";
        }
    }
}
</script>

<style scoped lang="scss">
.btn-submit-color{
    background-color: red;
    color:#f0e8c7;
    font-weight: bold;
        &:hover{
            font-weight:bold;
            background-color: #f0e8c7;
            color: red;
        }
}
</style>