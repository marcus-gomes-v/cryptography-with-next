import Hmac from '../libs/hmac';


export default function handler(req, res) {

  let {
    query: { message },
    method,
  } = req

  const oHmac = new Hmac();

  if(typeof(message) != 'string')
    method = 'ERROR' 

  switch (method) {
    case 'GET':
      res.status(200).json({ hmac: oHmac.encrypt(message)  })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl http://localhost:3000/api/cryptography/hmac?message=Your Message`)
  }


}
