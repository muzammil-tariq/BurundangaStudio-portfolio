<template>
    <div class="contact">
        <a>
            hola@burundanga.studio
        </a>
    </div>
</template>

<script>

    export default {
        name: 'contact',
        mounted() {}
    }

</script>

<style lang="scss" scoped>
    .contact {
        position: absolute;
        z-index: 2;
        bottom: 20px;
        right: 20px;
        width: 250px;
        height: 60px;
        border: 1px solid red;
        z-index: 9;
        a {
            color: white;
        }
    }
</style>
