//
// LogoSequence.vue

<template>
    <div class="logo-sequence">
        <img alt="burundanga logo">
    </div>
</template>

<script>

    export default {
        name: 'logo-sequence',
        data() {
            return {
                imageEl: null,
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
            this.imageEl = this.$el.querySelector('img')
            this.init()
            this.enterAnimation()
        },
        methods: {
            init() {
                this.imageEl.src = this.files[this.index].file.src
            },
            enterAnimation() {
                if (this.index === this.numFiles - 1) {
                    cancelAnimationFrame(this.raf)
                    this.$parent.breathingLogoEnabled = true
                    this.$nextTick(this.$parent.setListeners)
                    return
                }
                this.index++
                this.imageEl.src = this.files[this.index].file.src
                this.raf = requestAnimationFrame(this.enterAnimation)
            },
            leaveAnimation() {
                if (this.index === 0) {
                    cancelAnimationFrame(this.raf)
                    return
                }
                this.index--
                this.imageEl.src = this.files[this.index].file.src
                this.raf = requestAnimationFrame(this.leaveAnimation)
            }
        }
    }

</script>

<style lang="scss" scoped>
    .logo-sequence {
        img {
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
