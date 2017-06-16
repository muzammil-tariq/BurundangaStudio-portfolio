//
//  About.vue

<template>
    <div class="about" id="about">
        <div class="content">
            <h1><b>Burundanga.Studio</b> is an interactive design practice with an experimental core. A side project consisting of designer <a @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openXavi"><span></span>@xaviercusso</a> & developer <a @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openChristian"><span></span>@cmacmillanmarin</a>.</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'about',
        data() {
            return {
                hover: false,
                index: 0,
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
            updateStatus(e) {
                this.hover = !this.hover
                this.animate(e)
            },
            animate(e) {
                if (!this.hover) return
                const a = e.target
                TweenMax.to(a, 0.05, {
                    color: this.rainbowColors[this.index],
                    onComplete: () => {
                        if (!this.hover) {
                            this.index = 0
                            TweenMax.to(a, 0.05, { color: 'white' })
                        } else {
                            this.index = (this.index === this.rainbowColors.length - 1) ? 0 : this.index + 1
                            this.animate(e)
                        }
                    }
                })
            },
            openXavi() {
                window.open('https://twitter.com/xaviercusso', '_blank')
            },
            openChristian() {
                window.open('https://twitter.com/cmacmillanmarin', '_blank')
            }
        }
    }

</script>

<style lang="scss" scoped>
    .about {
        position: relative;
        z-index: 1;
        opacity: 0;
        height: 100%;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
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
                font-weight: 100;
                font-size: 32px;
                line-height: 48px;
                width: 775px;
                text-align: justify;
                a {
                    cursor: pointer;
                    position: relative;
                    color: white;
                    span {
                        position: absolute;
                        display: inline-block;
                        height: 1px;
                        width: 100%;
                        background: white;
                        bottom: -5px;
                    }
                }
            }
        }
    }
</style>
