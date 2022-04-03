import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'


export default class Salt {

  signup(email, password) {
    const salt = randomBytes(16).toString('hex')
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')
    const user = { email, password: `${salt}:${hashedPassword}` }
    return user;
  }

  login(email, password){
    // Its important to notice here, I dont have a file to keep the user password and email
    // So every request will return true, cause i'm invoking the creating on every authentication
    // Login
    const oUser = this.signup(email, password)
    const [salt, key] = oUser.password.split(":")
    
    const hashedBuffer = scryptSync(password, salt, 64)
    const keyBuffer = Buffer.from(key, 'hex')

    const match = timingSafeEqual(hashedBuffer, keyBuffer)

    if(match)
      return true;
    return false;
  }

}
