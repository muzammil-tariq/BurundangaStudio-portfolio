//
//  Home.vue

<template>
    <div class="home" id="home">
        <div class="content">
            <logo-sequence ref="logoSequence"></logo-sequence>
            <!-- <breathing-logo v-if="hover" ref="breathingLogo"></breathing-logo> -->
        </div>
    </div>
</template>

<script>

    import LogoSequence from './components/LogoSequence'
    // import BreathingLogo from './components/BreathingLogo'

    import Device from '../../config/device'

    export default {
        name: 'home',
        data() {
            return {
                x: 0,
                y: 0,
                prevX: 0,
                prevY: 0,
                maxAngle: 20,
                easing: 0.1,
                raf: null,
                canvas: null,
                canvasContainer: null,
                hover: false
            }
        },
        mounted() {
            this.canvas = this.$el.querySelector('canvas')
            this.canvasContainer = this.$el.querySelector('.content')
            this.canvasContainer.addEventListener('mousemove', this.onMousemove)
            this.canvasContainer.addEventListener('mouseenter', this.animate)
            this.canvasContainer.addEventListener('mouseleave', this.release)
        },
        methods: {
            animate() {
                if (!Device.isDesktop) return
                let rotationX = this.prevX
                let rotationY = this.prevY
                rotationX += ((this.maxAngle * this.y) - this.prevX) * this.easing
                rotationY += ((this.maxAngle * this.x) - this.prevY) * this.easing
                TweenMax.set(this.canvas, { rotationX, rotationY })
                this.prevX = rotationX
                this.prevY = rotationY
                this.raf = requestAnimationFrame(this.animate)
            },
            release() {
                cancelAnimationFrame(this.raf)
                this.prevX = 0
                this.prevY = 0
                TweenMax.to(this.canvas, 0.75, { rotationX: 0, rotationY: 0 })
            },
            onMousemove(e) {
                const canvasWidth = this.canvas.getBoundingClientRect().width
                const canvasHeight = this.canvas.getBoundingClientRect().height
                this.x = (e.layerX / (canvasWidth * 0.5)).toFixed(2)
                this.y = -(e.layerY / (canvasHeight * 0.5)).toFixed(2)
            },
            leave(el, done) {
                TweenMax.killTweensOf(this.$el)
                this.$refs.logoSequence.index = this.$refs.logoSequence.numFiles
                this.$refs.logoSequence.leaveAnimation()
                setTimeout(done, 1750)
            }
        },
        beforeDestroy() {
            // this.canvasContainer.removeEventListener('mousemove', this.onMousemove)
            // this.canvasContainer.removeEventListener('mouseenter', this.animate)
            // this.canvasContainer.removeEventListener('mouseleave', this.release)
        },
        components: {
            LogoSequence,
            // BreathingLogo
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
            perspective: 500px;
            h1 {
                color: white;
            }
        }
    }
</style>
