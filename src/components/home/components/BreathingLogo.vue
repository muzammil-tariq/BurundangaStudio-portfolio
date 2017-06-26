//
// BreathingLogo.vue

<template>
    <div class="breathing-logo" @mouseenter="startBreathing" @mouseleave="stopBreathing">
        <img class="front" src="img/logo_pieces/1_front.png" alt="Logo front part" />
        <img class="mid" src="img/logo_pieces/2_mid.png" alt="Logo mid part" />
        <img class="bottom-top" src="img/logo_pieces/3_bottom_parts/2.png" alt="Logo bottom top part" />
        <img class="bottom-right" src="img/logo_pieces/3_bottom_parts/3.png" alt="Logo bottom right part" />
        <img class="bottom-bottom" src="img/logo_pieces/3_bottom_parts/4.png" alt="Logo bottom bottom part" />
        <img class="bottom-left" src="img/logo_pieces/3_bottom_parts/1.png" alt="Logo bottom left part" />
    </div>
</template>

<script>

    import { TimelineMax } from 'gsap'

    export default {
        data() {
            return {
                tl: null,
                frontEl: null,
                midEl: null,
                botTopEl: null,
                botRigEl: null,
                botBotEl: null,
                botLefEl: null
            }
        },
        mounted() {
            this.frontEl = this.$el.querySelector('.front')
            this.midEl = this.$el.querySelector('.mid')
            this.botTopEl = this.$el.querySelector('.bottom-top')
            this.botRigEl = this.$el.querySelector('.bottom-right')
            this.botBotEl = this.$el.querySelector('.bottom-bottom')
            this.botLefEl = this.$el.querySelector('.bottom-left')
        },
        methods: {
            startBreathing() {
                this.tl = new TimelineMax({ repeat: -1, repeatDelay: 0 })
                this.tl.to(this.frontEl, 1, { scale: 1.05, rotation: 2 }, 'front')
                .to(this.frontEl, 1, { scale: 1, rotation: 0 }, 'backward')
                this.tl.to(this.midEl, 1, { scale: 1.025 }, 'front')
                .to(this.midEl, 1, { scale: 1 }, 'backward')
            },
            stopBreathing() {
                this.tl.kill()
                TweenMax.to(this.frontEl, 0.25, { scale: 1, rotation: 0 })
                TweenMax.to(this.midEl, 0.25, { scale: 1 })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .breathing-logo {
        border: 1px solid red;
        width: 400px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        img {
            pointer-events: none;
            // opacity: 0.5;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            width: 460px;
            @media (max-width: 460px) {
                width: 360px;
                height: 360px;
            }
        }
        .front {
            z-index: 5;
        }
        .mid {
            z-index: 4;
        }
        .bottom-top {
            z-index: 3
        }
    }
</style>
