import { createHmac } from 'crypto'

const key = 'secret-key'

export default class Hmac {

  encrypt(message) {
    const hmac = createHmac('sha256', key).update(message).digest('hex') 
    return hmac
  }

}
