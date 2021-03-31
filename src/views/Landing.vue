<template>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="text-center mt-5 mb-5"><h1>NovaTickets</h1>
            <form action="" @submit.prevent>
                <div class="form-group mt-5">
                    <p>Login</p>
                    <input type="text" class="form-control mb-2 ipt" name="email" placeholder="Email" required="required" v-model="email">
                    <input type="text" class="form-control mb-2 ipt" name="password" placeholder="Password" required="required" v-model="password">
                    <button type="submit" @click="login" class="btn btn-primary btn-lg btn-block login-btn">Submit</button>
                </div>
            </form>
            </div>
        </div>
</template>

<script setup>
import { isAuthorized } from '../helpers/useAuth'
import {useRouter} from 'vue-router'

const router = useRouter()

const login = () => {
    isAuthorized.value = true
    router.push('/main')
}

</script>

<style>

</style>