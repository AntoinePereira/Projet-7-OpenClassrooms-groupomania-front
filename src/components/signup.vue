<template>
    <div class="signup">
        <form>
            <h1>Signup</h1>
            <div>
                <label for="nom">Nom</label>
                <input type="text" id="titre" v-model="user.nom" required autofocus>
            </div>
            <div>
                <label for="prenom">Prenom</label>
                <input type="text" id="prenom" v-model="user.prenom" required>
            </div>
            <div>
                <label for="email">email</label>
                <input type="text" id="email" v-model="user.email" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="user.password" required>
            </div>
            <div>
                <label for="password-confirm">Is this an administrator account?</label>
                <select v-model="user.isAdmin">
                    <option value=1>Yes</option>
                    <option value=0>No</option>
                </select>
            </div>
            <button @click="signup">SIGNUP</button>
        </form>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'


export default {
    name: 'signup',
    data() {
        return {
            user: {
                nom: null,
                prenom: null,
                email: null,
                password: null,
                isAdmin: null,
            }
        }
    },
    components: {
    },
    methods: {
        signup(e) {
            axios.post("http://localhost:3000/api/auth/signup", this.user)
            .then((result) => {
                console.log(result)
            })
            e.preventDefault();
        }
    } 
}
</script>

<style scoped lang="scss">
    form{
        margin: 2em;
    }
    .signup{
        border: black solid 0.1em;
        border-radius: 1em;
        box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
    }
</style>