import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productForm: {},
    idProduct: '',
    banners: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertProductForEdit (state, payload) {
      state.productForm = payload
    },
    getIdProduct (state, payload) {
      state.idProduct = payload
    },
    insertBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire('Success', 'Success Login', 'success')
          router.push('/admin')
        })
        .catch((err) => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    fetchProduct (context, payload) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/admin/products')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    viewProductById (context, payload) {
      context.commit('getIdProduct', payload)
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProductForEdit', data)
          router.push('/admin/products/edit')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${context.state.idProduct}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push('/admin/products')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been updated',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    deleteProductById (context, payload) {
      return axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchBanner (context, payload) {
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/admin/banners')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your banner has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          const { errors } = err.response.data
          Swal.fire('Error', `${errors}`, 'error')
        })
    },
    updateStatusBanner (context, payload) {
      return axios({
        method: 'PATCH',
        url: `/banners/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: payload.status
        }
      })
    },
    deleteBannerById (context, payload) {
      return axios({
        method: 'DELETE',
        url: `/banners/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  }
})
