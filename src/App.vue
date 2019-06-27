//
// App.vue

<template>
    <div id="web">
        <div class="loader"></div>
        <logo ref="logo"></logo>
        <navigation ref="navigation"></navigation>
        <social ref="social"></social>
        <contact ref="contact"></contact>
        <transition v-if="loaded" name="transition" @enter="enter" @leave="leave" :css="false" mode="out-in" appear>
            <router-view ref="page"></router-view>
        </transition>
    </div>
</template>

<script>

import { TweenMax } from 'gsap'

import store from './config/store'

import Device from './config/device'
import Logo from './components/common/Logo'
import Contact from './components/common/Contact'
import Social from './components/common/Social'
import Navigation from './components/common/Navigation'

export default {
    name: 'web',
    store,
    data() {
        return {
            loader: null,
            loaded: false,
            loaderEl: null,
            numFiles: 41,
            index: 0,
            auxFiles: []
        }
    },
    computed: {
        rainbowColors() {
            return this.$store.state.rainbowColors
        },
        files() {
            return this.$store.state.files
        }
    },
    mounted() {
        this.loaderEl = this.$el.querySelector('.loader')
        this.loadImages()
        this.loaderAnimation()
        Device.setDevice()
    },
    methods: {
        loaderAnimation() {
            TweenMax.to(this.loaderEl, 0.05, {
                background: this.rainbowColors[this.index],
                onComplete: () => {
                    if (!this.loaded) {
                        this.index = (this.index === this.rainbowColors.length - 1) ? 0 : this.index + 1
                        this.loaderAnimation()
                    }
                }
            })
        },
        loadImages() {
            let c = 1;
            const files = [];
            const assets = this.getAssets();
            for (let i = 0; i < assets.length - 1; i++) {
                const asset = assets[i];
                const image = new Image();
                try {
                    image.src = asset;
                    image.decode()
                    .then(() => {
                        c++;
                        files[i] = image;
                        c === assets.length && this.endLoader(files);
                    })
                    .catch(() => { throw new Error(`Could not load/decode ${asset}.`) });
                } catch (error) {
                    image.onload = () => {
                        c++;
                        files[i] = image;
                        c === assets.length && this.endLoader(files);
                    }
                    image.src = asset;
                }
            }
        },
        endLoader(files) {
            this.$store.dispatch('setFiles', files)
            TweenMax.to(this.loaderEl, 0.5, {
                scale: 0,
                ease: Power2.easeIn,
                onComplete: () => {
                    this.loaded = true
                }
            })
        },
        getAssets() {
            for (let i = 0; i < this.numFiles; i++)
                this.auxFiles.push('img/logo_sequence/burundanga_studio_ident00' + this.returnId(i) + '.jpg')
            return this.auxFiles
        },
        returnId(id) {
            const n = (id < 10) ? '0' : ''
            return n + String(id)
        },
        enter(el, done) {
            TweenMax.killTweensOf(this.$el)
            if (this.$refs.page.enter) this.$refs.page.enter(el, done)
            else TweenMax.to(el, 0.5, { opacity: 1, y: 0, onComplete: done })
        },
        leave(el, done) {
            TweenMax.killTweensOf(this.$el)
            if (this.$refs.page.leave) this.$refs.page.leave(el, done)
            else TweenMax.to(el, 0.5, { opacity: 0, y: 20, onComplete: done })
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
        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            height: 20px;
            width: 20px;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            background: white;
        }
    }


</style>
