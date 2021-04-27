<template>
<div class="tableFixHead">
  <table class="table table-hover text-center">
      <thead class="thead-dark">
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <rowProduct v-for="product in products" :key="product.id" :product="product" @updateProduct="updateProduct"/>
      </tbody>
  </table>
</div>
</template>

<script>
import rowProduct from './row-product'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['products'])
  },
  methods: {
    updateProduct () {
      this.$emit('updateProduct')
    }
  },
  components: {
    rowProduct
  }
}
</script>

<style scoped>
/* table {
    display: block;
    overflow: auto;
}
tbody {
    display: block;
    max-height: 67vh;
    overflow: auto;
}
thead, tbody tr {
    display: table;
    width: 100%;
} */
.tableFixHead          { overflow-y: auto; height:70vh;}
.tableFixHead thead th { position: sticky; top: 0; }

/* Just common table stuff. Really. */
table  { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 16px; }
th     { background:#eee; }
</style>
