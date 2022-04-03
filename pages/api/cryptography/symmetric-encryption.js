import SymmetricEncryption from '../libs/symmetric-encryption';


export default function handler(req, res) {

  let {
    query: { encrypted },
    body: { message },
    method,
  } = req

  const oSymmetricEncryption = new SymmetricEncryption();

  if(typeof(message) != 'string' && typeof(encrypted) != 'string')
    method = 'ERROR';

  switch (method) {
    case 'POST':
      res.status(200).json({ encrypted: oSymmetricEncryption.encrypt(message)  })
      break
    case 'GET':
      res.status(200).json({ decrypted: oSymmetricEncryption.decrypt(encrypted)  })
      break
    default:
      res.setHeader('Allow', ['GET','POST'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl -d "message=Hello World" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/cryptography/symmetric-encryption`)
  }


}
