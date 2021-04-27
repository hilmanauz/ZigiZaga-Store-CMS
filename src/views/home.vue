<template>
  <button class="btn btn-danger" @click.prevent="goToLogin">LOGIN</button>
</template>

<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
