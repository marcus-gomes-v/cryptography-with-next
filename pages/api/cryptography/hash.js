// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Hash from '../libs/hash';


export default function handler(req, res) {

  const {
    body: { message },
    method,
  } = req

  const oHash = new Hash(message);

  switch (method) {
    case 'POST':
      res.status(200).json({ encrypted: oHash.encrypt()  })
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl -d "message=Hello World" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/cryptography/hash`)
  }


}
