<template>
    <div class="error-404">
    </div>
</template>

<script>

    export default {
        name: 'error-404',
        methods: {
            enter(el, done) {
              TweenMax.to(el, 0.5, { opacity: 1, onComplete: done })
            },
            leave(el, done) {
              TweenMax.to(el, 0.5, { opacity: 0, onComplete: done })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .error-404 {
      opacity: 0;
      color: white;
      width: 100vw;
      height: 100vh;
      background-position: center;
      background-size: cover;
      background-image: url('../../assets/img/404.gif');
    }
</style>
