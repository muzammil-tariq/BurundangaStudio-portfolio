//
//  About.vue

<template>
    <div class="about" id="about">
        <div class="content">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'about',
        data() {
            return {
                msg: 'About'
            }
        },
        methods: {}
    }

</script>

<style lang="scss" scoped>
    .about {
        position: relative;
        z-index: 1;
        opacity: 0;
        height: 100%;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            h1 {
                color: white;
            }
        }
    }
</style>
