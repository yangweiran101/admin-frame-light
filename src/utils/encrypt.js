import cryptoJs from 'crypto-js'
const IV = '021596305012anb2'

const KEY = '201909wglplant9g'

export function encrypt(word) {
  let str = ''
  if (typeof word === 'string') {
    str = word
  } else {
    str = JSON.stringify(word)
  }
  const key = cryptoJs.enc.Utf8.parse(KEY)// 秘钥
  const iv = cryptoJs.enc.Utf8.parse(IV)// 向量iv
  const encrypted = cryptoJs.AES.encrypt(str, key, { iv: iv, mode: cryptoJs.mode.CBC, padding: cryptoJs.pad.Pkcs7 })
  return encrypted.toString()
} // 加密
export function decrypt(word) {
  let str = ''
  if (typeof word === 'string') {
    str = word
  } else {
    str = JSON.stringify(word)
  }
  const key = cryptoJs.enc.Utf8.parse(KEY)// 秘钥
  const iv = cryptoJs.enc.Utf8.parse(IV)// 向量iv
  const decrypted = cryptoJs.AES.decrypt(str, key, { iv: iv, padding: cryptoJs.pad.Pkcs7 })
  return decrypted.toString(cryptoJs.enc.Utf8)
} // 解密 @param str

