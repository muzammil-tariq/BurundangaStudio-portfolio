<template>
    <div class="contact" @mouseenter="updateStatus" @mouseleave="updateStatus" @click="sendEmail">
        <div class="normal-device">
            <a>askfor@burundanga.studio</a>
        </div>
        <div class="small-device">
            <a>Mail us</a>
            <span class="line"></span>
            <svg viewBox="0 0 485.411 485.411">
                <path d="M0 81.824v321.763h485.411V81.824H0zm242.708 198.702L43.612 105.691h398.187L242.708 280.526zm-79.311-37.877L23.867 365.178V120.119l139.53 122.53zm18.085 15.884l61.22 53.762 61.22-53.762L441.924 379.72H43.487l137.995-121.187zm140.526-15.878l139.535-122.536v245.059L322.008 242.655z" fill="#FFF"/>
            </svg>
        </div>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    import Device from '../../config/device'

    export default {
        name: 'contact',
        data() {
            return {
                index: 0,
                hover: false
            }
        },
        computed: {
            rainbowColors() {
                return this.$store.state.rainbowColors
            }
        },
        methods: {
            updateStatus() {
                if (!Device.isDesktop) return
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
            },
            sendEmail() {
                window.location.href = 'mailto:askfor@burundanga.studio.com?subject=We%20need%20some%20good%20Burundanga'
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
        @media (max-width: 460px) {
            bottom: 25px;
            right: 25px;
        }
        @media (max-height: 460px) {
            bottom: 25px;
            right: 25px;
        }
        a {
            cursor: pointer;
            font-size: 18px;
            color: white;
        }
        .normal-device {
            @media (max-width: 620px) {
                display: none;
            }
        }
        .small-device {
            display: none;
            @media (max-width: 620px) {
                display: block;
            }
            .line {
                display: inline-block;
                position: relative;
                width: 16px;
                height: 1px;
                margin: 0 5px;
                background: white;
                vertical-align: middle;
            }
            svg {
                width: 20px;
                display: inline-block;
                vertical-align: middle;
            }
            a {
            }
        }
    }
</style>
