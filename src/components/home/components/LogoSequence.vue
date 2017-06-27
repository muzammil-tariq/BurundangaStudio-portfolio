//
// LogoSequence.vue

<template>
    <div class="logo-sequence">
        <div class="loader"></div>
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
                numFiles: 97,
                loader: null,
                loaderEl: null,
                raf: null,
                loaded: false,
                loaderIndex: 0,
                index: 0,
                files: [],
                rainbowColors: [
                    '#9400D3',
                    '#4B0082',
                    '#0000FF',
                    '#00FF00',
                    '#FFFF00',
                    '#FF7F00',
                    '#FF0000'
                ]
            }
        },
        mounted() {
            this.loadImages()
            this.loaderEl = this.$el.querySelector('.loader')
            this.initLoader()
            this.canvas = this.$el.querySelector('#sequence')
            this.context = this.canvas.getContext('2d')
        },
        methods: {
            loadImages() {
                this.loader = assetsLoader({
                    assets: this.getAssets()
                })
                .on('progress', (percent) => {
                    TweenMax.to(this.loaderEl, 0.1, { width: percent * 200 })
                })
                .on('complete', () => {
                    this.initCanvas()
                    TweenMax.to(this.loaderEl, 0.5, {
                        width: 0,
                        onComplete: this.enterAnimation
                    })
                })
                .start()
            },
            initLoader() {
                TweenMax.to(this.loaderEl, 0.05, {
                    background: this.rainbowColors[this.loaderIndex],
                    onComplete: () => {
                        if (!this.loaded) {
                            this.loaderIndex = (this.loaderIndex === this.rainbowColors.length - 1) ? 0 : this.loaderIndex + 1
                            this.initLoader()
                        }
                    }
                })
            },
            getAssets() {
                for (let i = 0; i < this.numFiles; i++)
                    this.files.push('img/logo_sequence/burundanga_studio_ident_000' + this.returnId(i) + '.jpg')
                return this.files
            },
            returnId(id) {
                const n = (id < 10) ? '0' : ''
                return n + String(id)
            },
            initCanvas() {
                const img = new Image()
                img.src = this.files[this.index]
                this.canvas.width = img.width
                this.canvas.height = img.height
                this.context.drawImage(img, 0, 0)
            },
            enterAnimation() {
                this.loaded = true
                if (this.index === this.numFiles - 1) {
                    cancelAnimationFrame(this.raf)
                    this.$parent.breathingLogoEnabled = true
                    this.$nextTick(this.$parent.setListeners)
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
        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            height: 2px;
            border-radius: 0.5px;
            background: white;
        }
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
