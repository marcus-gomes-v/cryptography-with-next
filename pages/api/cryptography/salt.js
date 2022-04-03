// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Salt from '../libs/salt';


export default function handler(req, res) {

  const {
    query: { email, password },
    body: { bEmail, bPassword },
    method,
  } = req

  const oSalt = new Salt();

  switch (method) {
    case 'POST':
      res.status(200).json({ signup: oSalt.signup(bEmail, bPassword)  })
      break
    case 'GET':
      res.status(200).json({ login: oSalt.login(email, password)  })
      break
    default:
      res.setHeader('Allow', ['POST','GET'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl -d "email=teste@teste.com&password=123456" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/cryptography/salt`)
  }


}
