<template>
    <div class="navigation">
        <div class="cross">
            <svg viewBox="0 0 13.44 13.44">
                  <title>
                      cross
                  </title>
                  <path d="M13.44.71L12.73 0 6.72 6.01.71 0 0 .71l6.01 6.01L0 12.73l.71.71 6.01-6.02 6.01 6.02.71-.71-6.02-6.01L13.44.71"/>
            </svg>
        </div>
        <router-link to="home" class="home">close</router-link>
        <router-link to="about" class="about">info</router-link>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'navigation',
        data() {
            return {
                homeLinkObj: null,
                aboutLinkObj: null
            }
        },
        watch: {
            $route: 'fetchRoute'
        },
        mounted() {
            this.homeLinkObj = this.$el.querySelector('.home')
            this.aboutLinkObj = this.$el.querySelector('.about')
            this.fetchRoute()
        },
        methods: {
            fetchRoute(init) {
                const transitionTime = (init) ? 0.5 : 0
                const route = this.$route.name
                TweenMax.to(this.homeLinkObj, transitionTime, { autoAlpha: (route === 'home') ? 0 : 1 })
                TweenMax.to(this.aboutLinkObj, transitionTime, { autoAlpha: (route === 'about') ? 0 : 1 })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .navigation {
        position: absolute;
        z-index: 2;
        top: 50px;
        right: 25px;
        width: 70px;
        text-align: right;
        a {
            position: absolute;
            right: 0;
            color: white;
        }
        .cross {
            position: absolute;
            left: 0;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            svg {
                width: 9px;
                fill: white;
            }
        }
    }
</style>
