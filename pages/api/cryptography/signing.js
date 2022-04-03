import Signing from '../libs/signing';

export default function handler(req, res) {

  let {
    body: { message },
    method,
  } = req

  const oSigning = new Signing();

  switch (method) {
    case 'POST':
      res.status(200).json({ response: oSigning.do(message)  })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl -d "message=Hello World" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/cryptography/signing`)
  }
}
