<template>
  <formEdit @submit="edit" :title="title" :productForm="productForm" :isTrue="isTrue"/>
</template>

<script>
import { mapState } from 'vuex'
import formEdit from '@/components/form-product.vue'
export default {
  data () {
    return {
      title: 'EDIT',
      isTrue: {
        isProduct: true,
        isLink: true,
        isPrice: true,
        isStock: true,
        isDescription: true
      }
    }
  },
  methods: {
    edit (value) {
      this.$store.dispatch('editProduct', value)
    }
  },
  components: {
    formEdit
  },
  computed: {
    ...mapState(['productForm'])
  }
}
</script>

<style scoped>

</style>
