<template>
<div>
  <h2 class="mb-4">Our Banners</h2>
  <listTable @updateBanner="updateBanner"/>
</div>
</template>

<script>
import listTable from '@/components/list-table-banner.vue'

export default {
  components: {
    listTable
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    updateBanner () {
      this.fetchBanner()
    }
  },
  created () {
    this.fetchBanner()
  }
}
</script>

<style>

</style>
