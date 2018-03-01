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
            <li class="tumblr" @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openTumblr">
                <svg viewBox="0 0 4.75 8">
                    <path d="M4.72 7.51A2.26 2.26 0 0 1 3.26 8H3.2A2.09 2.09 0 0 1 .88 5.8V3.55H.16A.16.16 0 0 1 0 3.4V2.33a.26.26 0 0 1 .18-.25A2 2 0 0 0 1.5.25c0-.17.1-.25.25-.25h1.13a.16.16 0 0 1 .16.16V2h1.3a.16.16 0 0 1 .16.16v1.23a.16.16 0 0 1-.16.16H3.01v2.07c0 .52.34.67.56.67a1.56 1.56 0 0 0 .51-.11.34.34 0 0 1 .2 0 .16.16 0 0 1 .11.12l.34 1c.03.06.05.14-.01.21z"/>
                </svg>
            </li>
            <li class="twitter" @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openTwitter">
                <svg viewBox="0 0 16 13">
                    <title>Twitter Icon</title>
                    <path d="M15.53.22a6.51 6.51 0 0 1-2 .8A3.26 3.26 0 0 0 9 .86v.05a3.36 3.36 0 0 0-1 3.16A9.3 9.3 0 0 1 1.17.58a3.33 3.33 0 0 0 1 4.42 3.28 3.28 0 0 1-1.49-.41 3.29 3.29 0 0 0 2.64 3.24 3.18 3.18 0 0 1-.87.11 3.23 3.23 0 0 1-.62-.07 3.28 3.28 0 0 0 3.06 2.29A6.63 6.63 0 0 1 0 11.5a9.29 9.29 0 0 0 12.77-2.67l.12-.19a9.45 9.45 0 0 0 1.47-5v-.43A6.68 6.68 0 0 0 16 1.5a6.53 6.53 0 0 1-1.88.52 3.3 3.3 0 0 0 1.41-1.8z"/>
                </svg>
            </li>
            <li class="instagram" @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openIg">
                <svg viewBox="0 0 14 14">
                    <title>Instagram icon</title>
                    <path d="M7 1.26h2.83a3.87 3.87 0 0 1 1.3.24 2.32 2.32 0 0 1 1.33 1.33 3.87 3.87 0 0 1 .24 1.3v5.66a3.87 3.87 0 0 1-.24 1.3 2.32 2.32 0 0 1-1.33 1.33 3.87 3.87 0 0 1-1.3.24H4.17a3.87 3.87 0 0 1-1.3-.24 2.32 2.32 0 0 1-1.33-1.33 3.87 3.87 0 0 1-.24-1.3V4.13a3.87 3.87 0 0 1 .24-1.3 2.32 2.32 0 0 1 1.33-1.29 3.87 3.87 0 0 1 1.3-.24H7M7 0H4.11a5.14 5.14 0 0 0-1.7.33 3.58 3.58 0 0 0-2 2A5.14 5.14 0 0 0 0 4.11v5.78a5.14 5.14 0 0 0 .33 1.7 3.58 3.58 0 0 0 2 2 5.14 5.14 0 0 0 1.7.33h5.78a5.14 5.14 0 0 0 1.7-.33 3.58 3.58 0 0 0 2-2 5.14 5.14 0 0 0 .33-1.7V4.11a5.14 5.14 0 0 0-.33-1.7 3.58 3.58 0 0 0-2-2A5.14 5.14 0 0 0 9.89 0H7"/>
                    <path d="M7 3.41A3.59 3.59 0 1 0 10.59 7 3.59 3.59 0 0 0 7 3.41m0 5.93A2.33 2.33 0 1 1 9.33 7 2.33 2.33 0 0 1 7 9.33m4.58-6.07a.84.84 0 1 1-.84-.84.84.84 0 0 1 .84.84"/>
                </svg>
            </li>
            <li class="github" @mouseenter="updateStatus" @mouseleave="updateStatus" @click="openGithub">
              <svg viewBox="0 0 500 500">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417-.098-9.709-.144-18.179-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" fill="#FFF"/>
              </svg>
            </li>
            <li class="label">
                <span class="line"></span>Stay tuned!
            </li>
        </ul>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    import Device from '../../config/device'

    export default {
        name: 'social',
        data() {
            return {
                hover: false,
                index: 0
            }
        },
        computed: {
            rainbowColors() {
                return this.$store.state.rainbowColors
            }
        },
        methods: {
            updateStatus(e) {
                if (!Device.isDesktop) return
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
            },
            openIg() {
                window.open('https://instagram.com/Burundanga.Studio', '_blank')
            },
            openTwitter() {
                window.open('https://twitter.com/Burundanga_BCN', '_blank')
            },
            openGithub() {
                window.open('https://github.com/BurundangaStudio', '_blank')
            },
            openTumblr() {
                window.open('https://burundangabcn.tumblr.com', '_blank')
            }
        }
    }

</script>

<style lang="scss" scoped>
    .social {
        position: absolute;
        z-index: 2;
        bottom: 33px;
        left: 30px;
        @media (max-width: 460px) {
            bottom: 28px;
            left: 25px;
        }
        @media (max-height: 460px) {
            bottom: 28px;
            left: 25px;
        }
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
                font-size: 18px;
                margin: 0px 4px;
                height: 12px;
                @media (max-width: 460px) {
                    margin: 0px 6px;
                }
                .line {
                    display: inline-block;
                    width: 10px;
                    height: 1px;
                    background: white;
                    vertical-align: middle;
                    margin: 0px 10px 0px 0px;
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
                cursor: auto;
                transform: translateY(-2px);
                -webkit-transform: translateY(-2px);
                -moz-transform: translateY(-2px);
                -ms-transform: translateY(-2px);
                @media (max-width: 460px) {
                    display: none;
                }
            }
            .twitter, .twitter svg, .instagram, .instagram svg  { width: 16px; }
            .tumblr, .tumblr svg { width: 9px; margin-right: 6px; }
            .github, .github svg { width: 17px; height: 18px; margin-right: 0px; }
        }
    }
</style>
