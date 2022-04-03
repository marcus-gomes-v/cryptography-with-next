import AsymmetricEncryption from '../libs/asymmetric-encryption';

export default function handler(req, res) {

  let {
    body: { message },
    method,
  } = req

  const oAsymmetricEncryption = new AsymmetricEncryption();

  switch (method) {
    case 'POST':
      res.status(200).json({ response: oAsymmetricEncryption.do(message)  })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl -d "message=Hello World" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/cryptography/asymmetric-encryption`)
  }
}
