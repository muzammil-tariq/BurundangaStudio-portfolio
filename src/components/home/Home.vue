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

    import Device from '../../config/device'

    export default {
        name: 'home',
        data() {
            return {
                x: 0,
                y: 0,
                prevX: 0,
                prevY: 0,
                maxAngle: 15,
                easing: 0.1,
                raf: null,
                canvas: null,
                canvasContainer: null,
                animating: false
            }
        },
        mounted() {
            this.canvas = this.$el.querySelector('canvas')
            this.canvasContainer = this.$el.querySelector('.content')
            window.addEventListener('resize', this.onResize)
        },
        methods: {
            setListeners() {
                window.addEventListener('mousemove', this.onMousemove)
                this.animate()
            },
            animate() {
                if (!Device.isDesktop) return
                this.animating = true
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
                this.animating = false
                this.prevX = 0
                this.prevY = 0
                TweenMax.to(this.canvas, 0.75, { rotationX: 0, rotationY: 0 })
            },
            onMousemove(e) {
                const halfWidth = (window.innerWidth * 0.5)
                const halfHeight = (window.innerHeight * 0.5)
                this.x = ((e.pageX - halfWidth) / halfWidth).toFixed(2)
                this.y = -((e.pageY - halfHeight) / halfHeight).toFixed(2)
            },
            leave(el, done) {
                TweenMax.killTweensOf(this.$el)
                this.$refs.logoSequence.index = this.$refs.logoSequence.numFiles
                this.$refs.logoSequence.leaveAnimation()
                setTimeout(done, 1750)
            },
            onResize() {
                if (!Device.isDesktop && this.animating) this.release()
                else if (Device.isDesktop && !this.animating) this.animate()
            }
        },
        beforeDestroy() {
            window.removeEventListener('mousemove', this.onMousemove)
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
            perspective: 500px;
            margin: 0;
            padding: 0;
            h1 {
                color: white;
            }
        }
    }
</style>
