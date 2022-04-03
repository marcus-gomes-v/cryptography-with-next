import Keypair from '../libs/keypairs';


export default function handler(req, res) {

  const {
    method,
  } = req

  const oKeypair = new Keypair();

  switch (method) {
    case 'GET':
      res.status(200).json({ keypairs: oKeypair.generate()  })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed, try use: curl http://localhost:3000/api/cryptography/keypairs`)
  }


}
