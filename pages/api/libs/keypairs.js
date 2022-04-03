import { generateKeyPairSync } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa',{
  modulusLength: 2048, // Length of key in bits
  publicKeyEncoding: {
    type: 'spki', // Recommended be spki by the node.js docs
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8', // Recommended to be 'pkcs8' by the Node.js docs
    format: 'pem'
  }
})

export default class Keypair {

  generate() {
    return {privateKey, publicKey} 
  }

}
