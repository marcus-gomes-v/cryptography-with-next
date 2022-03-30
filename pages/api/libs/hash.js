import { createHash } from 'crypto'


export default class Hash {
  
  constructor(message){
    this.message = typeof(message) == 'string' ? message : false;
  }

  encrypt() {
    return createHash('sha256').update(this.message).digest('hex')
  }

}
