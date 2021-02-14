<template>
    <div class="signup">
        <div class="topTag">
            <h1>Signup</h1>
            <form>
                <div>
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" v-model="user.nom" required autofocus>
                </div>
                <div>
                    <label for="prenom">Prenom</label>
                    <input type="text" id="prenom" v-model="user.prenom" required>
                </div>
                <div>
                    <label for="new-email">email</label>
                    <input type="text" autocomplete="new-email" id="new-email" v-model="user.email" required>
                </div>
                <div>
                    <label for="new-password">Password</label>
                    <input type="password" autocomplete="new-password" id="new-password" v-model="user.password" required>
                </div>
                <div>
                    <label for="password-confirm">Compte administrateur ?</label>
                    <select v-model="user.isAdmin">
                        <option value=1>Oui</option>
                        <option value=0>Non</option>
                    </select>
                </div>
             </form>
        </div>
        <button id="signupBtn" type="button" @click="signup">SIGNUP</button>    
    </div>
</template>


<script>
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
                alert('Utilisateur enregistré')
            })
            e.preventDefault();
        }
    } 
}
</script>


<style scoped lang="scss">
@import '@/assets/main.scss';

.signup{
    border: $color-secondary solid 0.1em;
    border-radius: 1em;
    box-shadow: 0.5em 0.5em 0.5em $color-secondary;
    .topTag{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            margin-bottom: 0px;
        }
        form{
            margin: 1em;
            display: flex;
            flex-direction: column;
            align-items: baseline;
            div{
                margin: 0.1em;
                display: flex;
                width: 95%;
                input{
                    width: 80%;
                    flex: 1;
                }
            }
        }
    }
    #signupBtn{
        @include blueButton;
        margin: 1em;
    } 
}
</style>
