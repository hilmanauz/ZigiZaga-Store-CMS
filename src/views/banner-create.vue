<template>
  <formAdd @submit="add" :title="title"/>
</template>

<script>
import formAdd from '@/components/form-banner.vue'
export default {
  data () {
    return {
      title: 'ADD'
    }
  },
  methods: {
    add (value) {
      this.$store.dispatch('addBanner', value)
    }
  },
  components: {
    formAdd
  }
}
</script>

<style scoped>

</style>
