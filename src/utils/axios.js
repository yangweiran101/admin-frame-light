import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { encrypt, decrypt } from './encrypt'

const options = {
  timeout: 15000,
  headers: { 'accessscene': 'admin' }
}
// axios.defaults.withCredentials = process.env.NODE_ENV === 'production';

const xhr = {
  get(url, params) {
    // console.log(params)
    params = { data: encrypt(params), enc: 1 }
    const token = getToken()
    if (token) {
      axios.defaults.headers.common['accesstoken'] = token
      axios.defaults.headers.common['accessscene'] = 'admin'
    }
    return new Promise((resolve, reject) => {
      axios.create(options).get(url, { params }).then(res => {
        if (res.data.code !== 200) {
          Message({
            message: res.data.msg || '接口报错',
            type: 'error',
            duration: 2 * 1000
          })
          resolve(res.data)
          if (process.env.NODE_ENV === 'production') {
            location.href = '/#/login'
          }
        } else {
          console.log(res.data)
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, params) {
    // console.log('post',params);
    params = { data: encrypt(params), enc: 1 }
    const token = getToken()
    if (token) {
      axios.defaults.headers.common['accesstoken'] = token
      axios.defaults.headers.common['accessscene'] = 'admin'
    }
    return new Promise((resolve, reject) => {
      axios.create(options).post(url, params).then(res => {
        if (res.data.code !== 200) {
          Message({
            message: res.data.msg || '接口报错',
            type: 'error',
            duration: 2 * 1000
          })
          console.log('失败状态', res.data)
          resolve(res.data)
          if (process.env.NODE_ENV === 'production') {
            location.href = '/#/login'
          }
        } else {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, params) {
    console.log('put', params)
    params = { data: encrypt(params), enc: 1 }
    const token = getToken()
    if (token) {
      axios.defaults.headers.common['accesstoken'] = token
      axios.defaults.headers.common['accessscene'] = 'admin'
    }
    return new Promise((resolve, reject) => {
      axios.create(options).put(url, params).then(res => {
        if (res.data.code !== 200) {
          Message({
            message: res.data.msg || '接口报错',
            type: 'error',
            duration: 2 * 1000
          })
          resolve(res.data)
          console.log('失败状态', res.data)
          if (process.env.NODE_ENV === 'production') {
            location.href = '/#/login'
          }
        } else {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, params) {
    params = { data: encrypt(params), enc: 1 }
    const token = getToken()
    if (token) {
      axios.defaults.headers.common['accesstoken'] = token
      axios.defaults.headers.common['accessscene'] = 'admin'
    }
    return new Promise((resolve, reject) => {
      axios.create(options).delete(url, { params }).then(res => {
        if (res.data.code !== 200) {
          Message({
            message: res.data.msg || '接口报错',
            type: 'error',
            duration: 2 * 1000
          })
          resolve(res.data)
          console.log('失败状态', res.data)
          if (process.env.NODE_ENV === 'production') {
            location.href = '/#/login'
          }
        } else {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default xhr
