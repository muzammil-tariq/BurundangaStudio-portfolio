<template>
    <div class="social">
        <p>
            Stay tunned!
        </p>
    </div>
</template>

<script>

    export default {
        name: 'social',
        mounted() {}
    }

</script>

<style lang="scss" scoped>
    .social {
        position: absolute;
        z-index: 2;
        bottom: 20px;
        left: 20px;
        width: 250px;
        height: 60px;
        border: 1px solid red;
        p {
            color: white;
        }
    }
</style>
