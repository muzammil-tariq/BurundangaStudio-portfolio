//
// LogoSequence.vue

<template>
    <div class="logo-sequence">
        <!-- <img alt="burundanga logo"> -->
        <canvas ref="canvas" />
    </div>
</template>

<script>

    export default {
        name: 'logo-sequence',
        data() {
            return {
                dpr: 0,
                ctx: undefined,
                imageEl: null,
                numFiles: 40,
                raf: null,
                index: 0,
                fpsInterval: 0,
                then: 0,
                startTime: 0,
                FPS: 40
            }
        },
        computed: {
            files() {
                return this.$store.state.files
            }
        },
        mounted() {
            this.imageEl = this.$el.querySelector('img')
            this.init();
            this.startAnimating();
            this.enterAnimation();
        },
        methods: {
            init() {
                this.dpr = window.devicePixelRatio || 1;
                const rect = this.$refs.canvas.getBoundingClientRect();
                this.$refs.canvas.width = rect.width * this.dpr;
                this.$refs.canvas.height = rect.height * this.dpr;
                this.ratio = this.$refs.canvas.width / this.dpr;
                this.ctx = this.$refs.canvas.getContext('2d');
                this.ctx.scale(this.dpr, this.dpr);
            },
            startAnimating() {
                this.fpsInterval = 1000 / this.FPS;
                this.then = Date.now();
                this.startTime = this.then;
            },
            enterAnimation() {
                this.now = Date.now();
                this.elapsed = this.now - this.then;

                if (this.elapsed > this.fpsInterval) {
                    this.then = this.now - (this.elapsed % this.fpsInterval);

                    if (this.index === this.numFiles - 1) {
                        cancelAnimationFrame(this.raf)
                        this.$parent.breathingLogoEnabled = true
                        this.$nextTick(this.$parent.setListeners)
                        return
                    }
                    this.index++
                    // this.imageEl.src = this.files[this.index].src
                    this.ctx.drawImage(this.files[this.index], 0, 0, this.ratio, this.ratio);
                }
                this.raf = requestAnimationFrame(this.enterAnimation);
            },
            leaveAnimation() {
                this.now = Date.now();
                this.elapsed = this.now - this.then;

                if (this.elapsed > this.fpsInterval) {
                    this.then = this.now - (this.elapsed % this.fpsInterval);
                    if (this.index === 0) {
                        cancelAnimationFrame(this.raf)
                        return
                    }
                    this.index--
                    this.ctx.drawImage(this.files[this.index], 0, 0, this.ratio, this.ratio);
                }
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
