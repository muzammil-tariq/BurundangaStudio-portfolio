//
//  Home.vue

<template>
    <div class="home" id="home">
        <div class="content">
            <logo-sequence ref="logoSequence"></logo-sequence>
        </div>
    </div>
</template>

<script>

    import LogoSequence from './components/LogoSequence'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Home',
            }
        },
        methods: {
            leave(el, done) {
                TweenMax.killTweensOf(this.$el)
                this.$refs.logoSequence.index = this.$refs.logoSequence.numFiles
                this.$refs.logoSequence.leaveAnimation()
                setTimeout(done, 1750)
            }
        },
        components: {
            LogoSequence
        }
    }

</script>

<style lang="scss" scoped>
    .home {
        position: relative;
        z-index: 1;
        height: 100%;
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
