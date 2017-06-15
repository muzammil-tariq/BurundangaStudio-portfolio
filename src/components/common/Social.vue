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
        bottom: 25px;
        left: 25px;
        p {
            color: white;
        }
    }
</style>
