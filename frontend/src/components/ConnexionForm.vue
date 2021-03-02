<template>
<div class="w-50">
    <form class="py-4">
    <div class="form-group">
        <label for="email">Adresse mail</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
    </div>
    <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="loginUser">Connexion</button>
    </form>
</div>
</template>

<script>
export default { 
    name: 'ConnexionForm',
    data () {
        return{
            email: '',
            password: ''
            }
        },
    methods: {
        loginUser() {
            let dataForm = JSON.stringify({email : this.email, password : this.password});
            async function postForm(dataToSend) {
                try {
                    let response = await fetch("http://localhost:3000/api/user/login", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: dataToSend,
                    });
                        if (response.ok) {
                            let responseId = await response.json();
                            localStorage.setItem("Id", responseId.userId);
                            localStorage.setItem("token", responseId.token);
                            localStorage.setItem("isAdmin", responseId.isAdmin);
                            localStorage.setItem("email", responseId.email);
                            location.replace(location.origin + "/signup#/allpost");
                        } else {
                            console.error('Retour du serveur : ', response.status);
                        }
                } catch (e) {
                    console.log(e);
                }
            }
            postForm(dataForm);
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
            color:red;
        }
}
</style>