<template>
    <div class="contact" @mouseenter="updateStatus" @mouseleave="updateStatus">
        <a href="mailto: hola@burundanga.studio">
            hola@burundanga.studio
        </a>
    </div>
</template>

<script>

    export default {
        name: 'contact',
        data() {
            return {
                index: 0,
                hover: false,
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
        methods: {
            updateStatus() {
                this.hover = !this.hover
                this.animate()
            },
            animate() {
                if (!this.hover) return
                const a = this.$el.querySelectorAll('a')
                TweenMax.to(a, 0.05, {
                    color: this.rainbowColors[this.index],
                    onComplete: () => {
                        if (!this.hover) {
                            this.index = 0
                            TweenMax.to(a, 0.05, { color: 'white' })
                        } else {
                            this.index = (this.index === this.rainbowColors.length - 1) ? 0 : this.index + 1
                            this.animate()
                        }
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .contact {
        position: absolute;
        z-index: 2;
        bottom: 30px;
        right: 30px;
        z-index: 9;
        a {
            font-size: 16px;
            color: white;
        }
    }
</style>
