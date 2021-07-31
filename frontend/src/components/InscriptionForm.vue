<template>
<div class="Form">
    <form class="py-4">
        <div class="form-group">
            <label for="email">Adresse mail : </label>
            <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
            <label for="username">Pseudo :</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe : </label>
            <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class=" btn-submit-color" v-on:click="signUpUser">Inscription</button>
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
.Form{
    margin-left: auto;
    margin-right: auto;
}

.form-group{
    font-size: 20px;
    border: solid teal 2px;
    margin-bottom: 15px;
}

.form-control{
    width: 300px;
    height: 30px;
    
    
}

.btn-submit-color{
    background-color: #546E7A;
    color:white;
    font-weight: bold;
        &:hover{
            font-weight:bold;
            background-color:teal;
            color:white;
        }
}
</style>