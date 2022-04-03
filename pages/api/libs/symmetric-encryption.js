import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

const key = randomBytes(32) 
const iv = randomBytes(16)

export default class SymmetricEncryption {

  encrypt(message) {
    const cipher = createCipheriv('aes256', key, iv)
    const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex')
    return encryptedMessage
  }

  decrypt(message) {
    const cipher = createDecipheriv('aes256', key, iv)
    const decryptedMessage = cipher.update(message, 'hex', 'utf8') + cipher.final('utf8')
    return decryptedMessage
  }
}
