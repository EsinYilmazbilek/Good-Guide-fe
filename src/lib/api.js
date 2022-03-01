import axios from 'axios'
import { getToken } from './auth'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// const baseUrl = 'http://localhost:3000/api'

export function getAllBrands() {
  return axios.get('http://localhost:3000/api/brands')
}

export function getSingleBrand(brandId) {
  return axios.get(`http://localhost:3000/api/brands/${brandId}`)
}

// export function createBrand(formData) {
//   return axios.post('http://localhost:3000/api/brands', formData, {
//     headers: { Authorization: `Bearer ${getToken()}` },
//   })
// }

// export function deleteBrand(brandId) {
//   return axios.delete(`http://localhost:3000/api/brands/${brandId}`, headers())
// }

// export function editBrand(brandId, formData) {
//   return axios.put(`http://localhost:3000/api/brands/${brandId}`, formData, headers())
// }

export function createBrandComment(brandId, formData) {
  return axios.post(`/api/${brandId}/comments`, formData, headers())
}

export function deleteBrandComment(brandId, commentId) {
  return axios.delete(`/api/${brandId}/comments/${commentId}`, headers())
}

export function registerUser(formData) {
  return axios.post('/api/register', formData)
}

export function loginUser(formData) {
  return axios.post('/api/login', formData)
}
