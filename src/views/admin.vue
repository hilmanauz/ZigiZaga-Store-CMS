<template>
<main class="wrapper d-flex align-items-stretch">
  <!-- Page Content  -->
  <sidebar/>
  <div id="content" class="p-4 p-md-5 pt-5">
    <router-view/>
  </div>
</main>
</template>

<script>
import sidebar from '@/components/sidebar.vue'

export default {
  name: 'Home',
  components: {
    sidebar
  }
}
</script>

<style scoped>
  #content {
    width: 100%;
    padding: 0;
    min-height: 100vh;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s; }
  .d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important; }
  .align-items-stretch {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important; }
</style>
