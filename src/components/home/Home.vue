//
//  Home.vue

<template>
    <div class="home" id="home">
        <div class="content">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Home',
            }
        },
        methods: {
            enter(el, done) {
                TweenMax.to(el, 0.5, { opacity: 1, y: 0, rotation: 360, onComplete: done })
            },
            leave(el, done) {
                TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: done })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .home {
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
