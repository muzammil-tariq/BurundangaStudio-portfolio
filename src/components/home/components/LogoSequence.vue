//
// LogoSequence.vue

<template>
    <div class="logo-sequence">
        <canvas class="sequence" id="sequence"></canvas>
    </div>
</template>

<script>

    export default {
        name: 'logo-sequence',
        data() {
            return {
                canvas: null,
                context: null,
                numFiles: 97,
                raf: null,
                index: 0,
            }
        },
        computed: {
            files() {
                return this.$store.state.files
            }
        },
        mounted() {
            this.canvas = this.$el.querySelector('#sequence')
            this.context = this.canvas.getContext('2d')
            this.initCanvas()
            this.enterAnimation()
        },
        methods: {
            initCanvas() {
                this.canvas.width = this.files[this.index].file.width
                this.canvas.height = this.files[this.index].file.height
                this.context.drawImage(this.files[this.index].file, 0, 0)
            },
            enterAnimation() {
                if (this.index === this.numFiles - 1) {
                    cancelAnimationFrame(this.raf)
                    this.$parent.breathingLogoEnabled = true
                    this.$nextTick(this.$parent.setListeners)
                    return
                }
                this.index++
                this.context.drawImage(this.files[this.index].file, 0, 0)
                this.raf = requestAnimationFrame(this.enterAnimation)
            },
            leaveAnimation() {
                if (this.index === 0) {
                    cancelAnimationFrame(this.raf)
                    return
                }
                this.index--
                this.context.drawImage(this.files[this.index].file, 0, 0)
                this.raf = requestAnimationFrame(this.leaveAnimation)
            }
        }
    }

</script>

<style lang="scss" scoped>
    .logo-sequence {
        canvas {
            width: 460px;
            height: 460px;
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
    }
</style>
