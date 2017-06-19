//
// Background.vue

<template>
    <div class="about-background"></div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'background',
        props: {
            image: String
        },
        mounted() {
            this.setBg()
        },
        methods: {
            setBg() {
                TweenMax.set(this.$el, { backgroundImage: 'url(' + this.image + ')' })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .about-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        pointer-events: none;
        z-index: 10000;
    }
</style>
