<template>
    <div class="navigation">
        <router-link to="home">Home</router-link>
        <router-link to="about">About</router-link>
    </div>
</template>

<script>

    export default {
        name: 'navigation',
        mounted() {}
    }

</script>

<style lang="scss" scoped>
    .navigation {
        position: absolute;
        z-index: 2;
        top: 50px;
        right: 25px;
        a {
            color: white;
        }
    }
</style>
