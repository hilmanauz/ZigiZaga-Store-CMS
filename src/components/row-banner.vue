<template>
  <tr>
    <td><h5>{{ banner.id }}</h5></td>
    <td><h5>{{ banner.title }}</h5></td>
    <td><h5><button class="btn btn-secondary" @click.prevent="updateStatusBanner(banner.id)">{{ banner.status }}</button></h5></td>
    <td><img :src="banner.image_url" alt="" style="width:200px"></td>
    <td><button class="btn btn-danger" @click="deleteBanner(banner.id)">Delete</button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'banner-data',
  props: ['banner'],
  methods: {
    updateStatusBanner (id) {
      let status = ''
      if (this.banner.status === 'Inactive') {
        status = 'Active'
      } else {
        status = 'Inactive'
      }
      this.$store.dispatch('updateStatusBanner', { id, status })
        .then(() => {
          this.$emit('updateBanner')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBanner (id) {
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
              this.$store.dispatch('deleteBannerById', id)
                .then(() => {
                  this.$emit('updateBanner')
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
