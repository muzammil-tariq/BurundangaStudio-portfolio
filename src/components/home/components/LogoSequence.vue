//
// LogoSequence.vue

<template>
    <div class="logo-sequence">
        <canvas class="sequence" id="sequence"></canvas>
    </div>
</template>

<script>

    import assetsLoader from 'assets-loader'

    export default {
        name: 'logo-sequence',
        data() {
            return {
                canvas: null,
                context: null,
                numFiles: 50,
                loader: null,
                raf: null,
                index: 0,
                files: []
            }
        },
        created() {
            this.loadImages()
        },
        mounted() {
            this.canvas = this.$el.querySelector('#sequence')
            this.context = this.canvas.getContext('2d')
        },
        methods: {
            loadImages() {
                this.loader = assetsLoader({
                    assets: this.getAssets()
                })
                .on('complete', () => {
                    this.initCanvas()
                    this.enterAnimation()
                })
                .start()
            },
            getAssets() {
                for (let i = 0; i < this.numFiles; i++)
                    this.files.push('img/logo_sequence/burundanga_studio_' + String(i) + '.jpg')
                return this.files
            },
            initCanvas() {
                const img = new Image()
                img.src = this.files[this.index]
                this.canvas.width = img.width
                this.canvas.height = img.height
                this.context.drawImage(img, 0, 0)
            },
            enterAnimation() {
                if (this.index === this.numFiles) {
                    cancelAnimationFrame(this.raf)
                    return
                }
                this.index++
                const img = new Image()
                img.src = this.files[this.index]
                this.context.drawImage(img, 0, 0)
                this.raf = requestAnimationFrame(this.enterAnimation)
            },
            leaveAnimation() {
                if (this.index === 0) {
                    cancelAnimationFrame(this.raf)
                    return
                }
                this.index--
                const img = new Image()
                img.src = this.files[this.index]
                this.context.drawImage(img, 0, 0)
                this.raf = requestAnimationFrame(this.leaveAnimation)
            }
        }
    }

</script>

<style lang="scss" scoped>
    .logo-sequence {
        canvas {
            width: 400px;
            height: 400px;
        }
    }
</style>
