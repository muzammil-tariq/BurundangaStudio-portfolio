<template>
    <div class="navigation" @click="switchPage" @mouseenter="updateStatus" @mouseleave="updateStatus">
        <div class="cross">
            <svg viewBox="0 0 13.44 13.44">
                  <title>
                      cross
                  </title>
                  <path d="M13.44.71L12.73 0 6.72 6.01.71 0 0 .71l6.01 6.01L0 12.73l.71.71 6.01-6.02 6.01 6.02.71-.71-6.02-6.01L13.44.71"/>
            </svg>
        </div>
        <a class="home"><span class="mask">Close <span class="line"></span></span></a>
        <a class="about"><span class="mask">info</span></a>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    import Device from '../../config/device'

    export default {
        name: 'navigation',
        data() {
            return {
                homeLinkObj: null,
                homeLinkObjMask: null,
                aboutLinkObj: null,
                aboutLinkObjMask: null,
                crossObj: null,
                hover: false,
                index: 0,
                inTransition: false,
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
        watch: {
            $route: 'fetchRoute'
        },
        mounted() {
            this.homeLinkObj = this.$el.querySelector('.home')
            this.homeLinkObjMask = this.$el.querySelector('.home .mask')
            this.aboutLinkObj = this.$el.querySelector('.about')
            this.aboutLinkObjMask = this.$el.querySelector('.about .mask')
            this.crossObj = this.$el.querySelector('.cross')
            this.fetchRoute()
        },
        methods: {
            updateStatus(e) {
                if (!Device.isDesktop) return
                this.hover = !this.hover
                this.animate(e)
            },
            animate(e) {
                if (!this.hover) return
                const a = e.target.querySelectorAll('a, path')
                const line = e.target.querySelectorAll('.line')
                TweenMax.to(line, 0.05, { background: this.rainbowColors[this.index] })
                TweenMax.to(a, 0.05, {
                    color: this.rainbowColors[this.index],
                    fill: this.rainbowColors[this.index],
                    onComplete: () => {
                        if (!this.hover) {
                            this.index = 0
                            TweenMax.to(a, 0.05, { color: 'white', fill: 'white' })
                            TweenMax.to(line, 0.05, { background: 'white' })
                        } else {
                            this.index = (this.index === this.rainbowColors.length - 1) ? 0 : this.index + 1
                            this.animate(e)
                        }
                    }
                })
            },
            switchPage() {
                if (this.inTransition) return
                this.$router.push({ name: (this.$route.name === 'home') ? 'about' : 'home' })
            },
            fetchRoute(init) {
                TweenMax.killTweensOf(this.$el)
                this.inTransition = true
                const transitionTime = (init) ? 1 : 0
                setTimeout(() => {
                    if (this.$route.name === 'home') this.transitionToHomeWith(transitionTime)
                    else this.transitionToAboutWith(transitionTime)
                }, transitionTime * 1750)
            },
            transitionToHomeWith(transitionTime) {
                TweenMax.to(this.homeLinkObj, transitionTime * 0.5, { x: -75 })
                TweenMax.to(this.homeLinkObjMask, transitionTime * 0.5, { x: 75 })
                TweenMax.to(this.aboutLinkObj, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.aboutLinkObjMask, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.crossObj, transitionTime * 0.5, { rotation: 45, x: -44, y: 2, z: 0, onComplete: () => { this.inTransition = false } })
            },
            transitionToAboutWith(transitionTime) {
                TweenMax.to(this.aboutLinkObj, transitionTime * 0.25, { x: 30 })
                TweenMax.to(this.aboutLinkObjMask, transitionTime * 0.25, { x: -30 })
                TweenMax.to(this.homeLinkObj, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.homeLinkObjMask, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.crossObj, transitionTime * 0.5, { rotation: 0, x: 0, y: 2, z: 0, onComplete: () => { this.inTransition = false } })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .navigation {
        cursor: pointer;
        position: absolute;
        z-index: 2;
        top: 35px;
        right: 30px;
        text-align: right;
        a {
            position: absolute;
            font-size: 18px;
            right: 0;
            color: white;
            overflow: hidden;
            .mask {
                position: relative;
                display: inline-block;
            }
            .line {
                display: inline-block;
                width: 15px;
                height: 1px;
                background: white;
                vertical-align: middle;
                margin: 0px 4px;
            }
        }
        .home {
            right: 20px;
            .mask {
                width: 75px;
            }
        }
        .cross {
            position: absolute;
            right: 0;
            svg {
                width: 13px;
                fill: white;
            }
        }
    }
</style>
