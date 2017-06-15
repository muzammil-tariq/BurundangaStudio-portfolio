<template>
    <div class="logo">
        <p>
            Burundanga.Studio
        </p>
    </div>
</template>

<script>

    export default {
        name: 'logo',
        mounted() {}
    }

</script>

<style lang="scss" scoped>

    @import "~assets/css/variables";

    .logo {
        position: absolute;
        z-index: 2;
        top: 20px;
        left: 20px;
        width: 250px;
        height: 60px;
        border: 1px solid red;
        p {
            color: white;
            font-family: $font-family;
        }
    }
</style>
