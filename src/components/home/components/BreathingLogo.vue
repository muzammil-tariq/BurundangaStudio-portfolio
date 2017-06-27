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

    import Device from '../../../config/device'

    export default {
        data() {
            return {
                tl: null,
                frontEl: null,
                midEl: null,
                botTopEl: null,
                botRigEl: null,
                botBotEl: null,
                botLefEl: null,
                desktop: null,
                breathing: false
            }
        },
        watch: {
            desktop() {
                if (this.desktop && this.breathing) this.stopBreathing()
                else if (!this.desktop && !this.breathing) this.startBreathing()
            }
        },
        mounted() {
            this.desktop = Device.isDesktop
            TweenMax.to(this.$el, 1, { opacity: 1 })
            this.frontEl = this.$el.querySelector('.front')
            this.midEl = this.$el.querySelector('.mid')
            this.botTopEl = this.$el.querySelector('.bottom-top')
            this.botRigEl = this.$el.querySelector('.bottom-right')
            this.botBotEl = this.$el.querySelector('.bottom-bottom')
            this.botLefEl = this.$el.querySelector('.bottom-left')
            window.addEventListener('resize', this.onResize)
        },
        methods: {
            startBreathing() {
                this.breathing = true
                this.tl = new TimelineMax({ repeat: -1, repeatDelay: 0 })
                this.tl.to(this.frontEl, 1, { scale: 1.05, rotation: 2 }, 'front')
                .to(this.frontEl, 1, { scale: 1, rotation: 0 }, 'backward')
                this.tl.to(this.midEl, 1, { scale: 1.025 }, 'front')
                .to(this.midEl, 1, { scale: 1 }, 'backward')
            },
            stopBreathing() {
                this.breathing = false
                this.tl.kill()
                TweenMax.to(this.frontEl, 0.25, { scale: 1, rotation: 0, clearProps: 'all' })
                TweenMax.to(this.midEl, 0.25, { scale: 1, clearProps: 'all' })
            },
            hide() {
                TweenMax.set(this.$el, { opacity: 0 })
            },
            onResize() {
                this.desktop = Device.isDesktop
            }
        }
    }

</script>

<style lang="scss" scoped>
    .breathing-logo {
        opacity: 0;
        width: 400px;
        height: 400px;
        position: absolute;
        top: calc(50% - 2px);
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        img {
            pointer-events: none;
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
            @media (max-width: 360px) {
                width: 300px;
                height: 300px;
            }
            @media screen and ( max-height: 460px ){
                width: 360px;
                height: 360px;
            }
            @media screen and ( max-height: 360px ){
                width: 280px;
                height: 280px;
            }
            @media screen and ( max-height: 320px ){
                width: 250px;
                height: 250px;
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
