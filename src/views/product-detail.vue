<template>
<div>
  <h2 class="mb-4">Our Products</h2>
  <listTable @updateProduct="updateProduct"/>
</div>
</template>

<script>
import listTable from '@/components/list-table-product.vue'

export default {
  components: {
    listTable
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    updateProduct () {
      this.fetchProduct()
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
