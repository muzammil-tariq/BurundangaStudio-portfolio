<template>
    <div class="navigation" @click="switchPage">
        <div class="cross">
            <svg viewBox="0 0 13.44 13.44">
                  <title>
                      cross
                  </title>
                  <path d="M13.44.71L12.73 0 6.72 6.01.71 0 0 .71l6.01 6.01L0 12.73l.71.71 6.01-6.02 6.01 6.02.71-.71-6.02-6.01L13.44.71"/>
            </svg>
        </div>
        <a class="home"><span class="mask">Close <span class="line"></span></span></a>
        <a class="about"><span class="mask">Info</span></a>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'navigation',
        data() {
            return {
                homeLinkObj: null,
                homeLinkObjMask: null,
                aboutLinkObj: null,
                aboutLinkObjMask: null,
                crossObj: null
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
            switchPage() {
                this.$router.push({ name: (this.$route.name === 'home') ? 'about' : 'home' })
            },
            fetchRoute(init) {
                TweenMax.killTweensOf(this.$el)
                const transitionTime = (init) ? 1 : 0
                setTimeout(() => {
                    if (this.$route.name === 'home') this.transitionToHomeWith(transitionTime)
                    else this.transitionToAboutWith(transitionTime)
                }, transitionTime * 1750)
            },
            transitionToHomeWith(transitionTime) {
                TweenMax.to(this.homeLinkObj, transitionTime * 0.5, { x: -64 })
                TweenMax.to(this.homeLinkObjMask, transitionTime * 0.5, { x: 64 })
                TweenMax.to(this.aboutLinkObj, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.aboutLinkObjMask, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.crossObj, transitionTime * 0.5, { rotation: 45, x: -35, y: -1, z: 0 })
            },
            transitionToAboutWith(transitionTime) {
                TweenMax.to(this.aboutLinkObj, transitionTime * 0.25, { x: 30 })
                TweenMax.to(this.aboutLinkObjMask, transitionTime * 0.25, { x: -30 })
                TweenMax.to(this.homeLinkObj, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.homeLinkObjMask, transitionTime * 0.5, { x: 0 })
                TweenMax.to(this.crossObj, transitionTime * 0.5, { rotation: 0, x: 0, y: -1, z: 0 })
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
            font-size: 15px;
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
            right: 15px;
            .mask {
                width: 68px;
            }
        }
        .cross {
            cursor: pointer;
            position: absolute;
            right: 0;
            transform: rotate(45deg) translateY(-2px) translateZ(0);
            -webkit-transform: rotate(45deg) translateY(-2px) translateZ(0);
            -moz-transform: rotate(45deg) translateY(-2px) translateZ(0);
            -ms-transform: rotate(45deg) translateY(-2px) translateZ(0);
            svg {
                width: 9px;
                fill: white;
            }
        }
    }
</style>
