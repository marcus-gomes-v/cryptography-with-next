import { publicEncrypt, privateDecrypt } from 'crypto'
import Keypair from './keypairs'

const { publicKey, privateKey } = new Keypair().generate();

export default class AsymmetricEncryption {

  do(message){
    const encryptedMessage = this.encrypt(message)
    const decryptedMessage = this.decrypt(encryptedMessage).toString('utf-8')
    return { encryptedMessage, decryptedMessage }
  }

  encrypt(message) {
    const encryptedMessage = publicEncrypt(
      publicKey,
      Buffer.from(message)
    )
    return encryptedMessage
  }

  decrypt(message) {
    const decryptedMessage = privateDecrypt(
      privateKey,
      message
    ) 
    return decryptedMessage
  }
}
