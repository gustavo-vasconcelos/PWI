<template>
    <div class="play">
        <h1>Guess the Number</h1>
        <input type="number">
        <button>Guess</button>
        <br>
        <p>Attempts: {{ attempts }} / {{ maxAttempts }}</p>
        <br>
        <router-link :to="{name: 'home'}">Back</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            attempts: 0
        }
    },
    computed: {
        maxAttempts() {

        }
    }
}
</script>


<style>
    .play {
        padding-top: 50px;
    }
</style>
