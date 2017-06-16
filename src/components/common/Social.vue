<template>
    <div class="social">
        <ul>
            <!-- <li class="facebook"  @mouseenter="updateStatus" @mouseleave="updateStatus">
                <a href="" target="_blank">
                    <svg viewBox="0 0 8 16">
                        <title>Facebook icon</title>
                        <path d="M0 5.26h1.7v-1.6a3.64 3.64 0 0 1 .6-2.51A2.66 2.66 0 0 1 4.9 0 10.85 10.85 0 0 1 8 .3l-.3 2.51a5.88 5.88 0 0 0-1.4-.2c-.7 0-1.3.2-1.3.9v1.95h2.7l-.2 2.21H5V16H1.7V7.67H0z"/>
                    </svg>
                </a>
            </li> -->
            <li class="twitter" @mouseenter="updateStatus" @mouseleave="updateStatus">
                <svg viewBox="0 0 16 13">
                    <title>Twitter Icon</title>
                    <path d="M15.53.22a6.51 6.51 0 0 1-2 .8A3.26 3.26 0 0 0 9 .86v.05a3.36 3.36 0 0 0-1 3.16A9.3 9.3 0 0 1 1.17.58a3.33 3.33 0 0 0 1 4.42 3.28 3.28 0 0 1-1.49-.41 3.29 3.29 0 0 0 2.64 3.24 3.18 3.18 0 0 1-.87.11 3.23 3.23 0 0 1-.62-.07 3.28 3.28 0 0 0 3.06 2.29A6.63 6.63 0 0 1 0 11.5a9.29 9.29 0 0 0 12.77-2.67l.12-.19a9.45 9.45 0 0 0 1.47-5v-.43A6.68 6.68 0 0 0 16 1.5a6.53 6.53 0 0 1-1.88.52 3.3 3.3 0 0 0 1.41-1.8z"/>
                </svg>
            </li>
            <li class="instagram" @mouseenter="updateStatus" @mouseleave="updateStatus">
                <svg viewBox="0 0 14 14">
                    <title>Instagram icon</title>
                    <path d="M7 1.26h2.83a3.87 3.87 0 0 1 1.3.24 2.32 2.32 0 0 1 1.33 1.33 3.87 3.87 0 0 1 .24 1.3v5.66a3.87 3.87 0 0 1-.24 1.3 2.32 2.32 0 0 1-1.33 1.33 3.87 3.87 0 0 1-1.3.24H4.17a3.87 3.87 0 0 1-1.3-.24 2.32 2.32 0 0 1-1.33-1.33 3.87 3.87 0 0 1-.24-1.3V4.13a3.87 3.87 0 0 1 .24-1.3 2.32 2.32 0 0 1 1.33-1.29 3.87 3.87 0 0 1 1.3-.24H7M7 0H4.11a5.14 5.14 0 0 0-1.7.33 3.58 3.58 0 0 0-2 2A5.14 5.14 0 0 0 0 4.11v5.78a5.14 5.14 0 0 0 .33 1.7 3.58 3.58 0 0 0 2 2 5.14 5.14 0 0 0 1.7.33h5.78a5.14 5.14 0 0 0 1.7-.33 3.58 3.58 0 0 0 2-2 5.14 5.14 0 0 0 .33-1.7V4.11a5.14 5.14 0 0 0-.33-1.7 3.58 3.58 0 0 0-2-2A5.14 5.14 0 0 0 9.89 0H7"/>
                    <path d="M7 3.41A3.59 3.59 0 1 0 10.59 7 3.59 3.59 0 0 0 7 3.41m0 5.93A2.33 2.33 0 1 1 9.33 7 2.33 2.33 0 0 1 7 9.33m4.58-6.07a.84.84 0 1 1-.84-.84.84.84 0 0 1 .84.84"/>
                </svg>
            </li>
            <li class="label">
                <span class="line"></span>Stay stoned!
            </li>
        </ul>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'social',
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
                const path = e.target.querySelectorAll('path')
                TweenMax.to(path, 0.05, {
                    fill: this.rainbowColors[this.index],
                    onComplete: () => {
                        if (!this.hover) {
                            this.index = 0
                            TweenMax.to(path, 0.05, { fill: 'white' })
                        } else {
                            this.index = (this.index === this.rainbowColors.length - 1) ? 0 : this.index + 1
                            this.animate(e)
                        }
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .social {
        position: absolute;
        z-index: 2;
        bottom: 30px;
        left: 30px;
        ul {
            margin: 0;
            padding: 0;
            li {
                cursor: pointer;
                position: relative;
                list-style: none;
                display: inline-block;
                vertical-align: middle;
                margin: 0;
                padding: 0;
                color: white;
                font-size: 16px;
                margin: 0px 4px;
                height: 12px;
                .line {
                    display: inline-block;
                    width: 10px;
                    height: 1px;
                    background: white;
                    vertical-align: middle;
                    margin: 0px 10px 0px 2px;
                    transform: translateY(-1px);
                    -webkit-transform: translateY(-1px);
                    -moz-transform: translateY(-1px);
                    -ms-transform: translateY(-1px);
                }
                svg {
                    position: absolute;
                    display: inline-block;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    path {
                        fill: white;
                    }
                }
            }
            .label {
                transform: translateY(-2px);
                -webkit-transform: translateY(-2px);
                -moz-transform: translateY(-2px);
                -ms-transform: translateY(-2px);
            }
            .facebook, .facebook svg { width: 7px; }
            .twitter, .twitter svg, .instagram, .instagram svg  { width: 15px; }
        }
    }
</style>
