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
        top: 20px;
        right: 20px;
        width: 250px;
        height: 60px;
        border: 1px solid red;
        a {
            color: white;
        }
    }
</style>
