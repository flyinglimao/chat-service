function getHandler(query, res) {
  res.json({yo: global.test})
}

function postHandler(query, res) {

}

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case 'GET':
      getHandler(query, res)
      break
    case 'POST':
      postHandler(query, res)
      break
    default:
      res.status(405).end('Method not allowed')
  }
}
