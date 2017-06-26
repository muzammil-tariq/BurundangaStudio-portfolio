//
// BreathingLogo.vue

<template>
    <div class="breathing-logo">
        <img class="front" src="img/logo_pieces/1_front.png" alt="Logo front part" />
        <img class="mid" src="img/logo_pieces/2_mid.png" alt="Logo mid part" />
        <img class="bottom-top" src="img/logo_pieces/3_bottom_parts/2.png" alt="Logo bottom top part" />
        <img class="bottom-right" src="img/logo_pieces/3_bottom_parts/3.png" alt="Logo bottom right part" />
        <img class="bottom-bottom" src="img/logo_pieces/3_bottom_parts/4.png" alt="Logo bottom bottom part" />
        <img class="bottom-left" src="img/logo_pieces/3_bottom_parts/1.png" alt="Logo bottom left part" />
    </div>
</template>

<script>

    export default {
        mounted() {
            this.enterAnimation()
        },
        methods: {
            enterAnimation() {
                console.log('Animation')
            }
        }
    }

</script>

<style lang="scss" scoped>
    .breathing-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        img {
            opacity: 0.2;
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
