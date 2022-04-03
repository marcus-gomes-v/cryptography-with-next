import { createSign, createVerify } from 'crypto'
import Keypair from './keypairs'

const { publicKey, privateKey } = new Keypair().generate();

export default class Signing {

  do(message){
    const signedMessage = this.encrypt(message)
    const verifiedMessage = this.decrypt(signedMessage.message, signedMessage.signature)
    return { signedMessage, verifiedMessage }
  }

  encrypt(message) {
    const signer = createSign('rsa-sha256')
    signer.update(message)
    const signature = signer.sign(privateKey, 'hex')
    return { message, signature }
  }

  decrypt(message, signature) {
    const verifier = createVerify('rsa-sha256')
    verifier.update(message)
    const isVerified = verifier.verify(publicKey, signature, 'hex')
    return isVerified
  }
}
