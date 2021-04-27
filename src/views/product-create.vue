<template>
  <formAdd @submit="add" :title="title" :productForm="productForm" :isTrue="isTrue"/>
</template>

<script>
import formAdd from '@/components/form-product.vue'
export default {
  data () {
    return {
      title: 'ADD',
      productForm: {
        inputName: '',
        inputLink: '',
        inputPrice: '',
        inputStock: '',
        inputDescription: ''
      },
      isTrue: {
        isProduct: false,
        isLink: false,
        isPrice: false,
        isStock: false,
        isDescription: false
      }
    }
  },
  methods: {
    add (value) {
      this.$store.dispatch('addProduct', value)
    }
  },
  components: {
    formAdd
  }
}
</script>

<style scoped>

</style>
