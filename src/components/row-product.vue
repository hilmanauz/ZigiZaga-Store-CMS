<template>
  <tr>
    <td><h5>{{ product.id }}</h5></td>
    <td><h5>{{ product.name }}</h5></td>
    <td><img :src="product.image_url" alt="" style="width:200px"></td>
    <td><h5>Rp.{{ product.price.toLocaleString('id') }}</h5></td>
    <td><h5>{{ product.stock }}</h5></td>
    <td><button class="btn btn-secondary" @click.prevent="editProduct(product.id)">Edit</button> <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'product-data',
  props: ['product'],
  methods: {
    editProduct (id) {
      this.$store.dispatch('viewProductById', id)
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your product has been deleted.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            if (result.isConfirmed) {
              this.$store.dispatch('deleteProductById', id)
                .then(() => {
                  this.$emit('updateProduct')
                })
                .catch(err => {
                  console.log(err)
                })
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your product is safe :)',
              'error'
            )
          }
        })
    }
  }
}
</script>

<style scoped>
  td {
    text-align: center;
    vertical-align: middle;
  }
  img {
  max-width: 100%;
  height: auto;
  }
</style>
