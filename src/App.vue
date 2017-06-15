//
// App.vue

<template>
    <div id="web">
        <logo></logo>
        <navigation></navigation>
        <social></social>
        <contact></contact>
        <transition name="transition" @enter="enter" @leave="leave" :css="false" mode="out-in" appear>
            <router-view ref="page"></router-view>
        </transition>
    </div>
</template>

<script>

import { TweenMax } from 'gsap'

import Device from './config/device'
import Logo from './components/common/Logo'
import Contact from './components/common/Contact'
import Social from './components/common/Social'
import Navigation from './components/common/Navigation'

export default {
    name: 'web',
    mounted() {
        Device.setDevice()
    },
    methods: {
        enter(el, done) {
            if (this.$refs.page.enter) this.$refs.page.enter(el, done)
            else TweenMax.to(el, 0.5, { opacity: 1, y: 0, onComplete: done })
        },
        leave(el, done) {
            if (this.$refs.page.leave) this.$refs.page.leave(el, done)
            else TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: done })
        }
    },
    components: {
        Logo,
        Contact,
        Social,
        Navigation
    },
}

</script>

<style lang="scss">

    @import "~assets/css/main";

    #web {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background: black;
        height: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>
