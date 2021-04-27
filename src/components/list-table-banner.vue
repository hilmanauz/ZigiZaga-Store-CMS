<template>
  <div class="tableFixHead">
    <table class="table table-hover text-center">
        <thead class="thead-dark">
          <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <rowBanner v-for="banner in banners" :key="banner.id" :banner="banner" @updateBanner="updateBanner"/>
        </tbody>
    </table>
  </div>
</template>

<script>
import rowBanner from './row-banner'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['banners'])
  },
  methods: {
    updateBanner () {
      this.$emit('updateBanner')
    }
  },
  components: {
    rowBanner
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
