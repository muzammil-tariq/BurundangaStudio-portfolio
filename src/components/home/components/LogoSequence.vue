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
                loader: null
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
                }).on('progress', (percent) => {
                    console.log(percent)
                }).start()
            },
            getAssets() {
                const files = []
                for (let i = 1; i < this.numFiles; i++)
                    files.push('img/logo_sequence/burundanga_studio_' + String(i) + '.jpg')
                return files
            }
        }
    }

</script>

<style lang="scss" scoped>
    .logo-sequence {
        canvas {
            width: 400px;
            height: 400px;
            border: 1px solid white;
        }
    }
</style>
