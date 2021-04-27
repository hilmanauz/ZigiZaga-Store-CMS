import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://amazing-ecommerce.herokuapp.com/'
//   headers: localStorage.access_token
})

export default instance
