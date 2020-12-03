// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

export default (req, res) => {
  res.statusCode = 200
  res.json([
    'Argentina',
    'Brasil',
    'Uruguay',
    'Venezuela',
    'Chile'
  ])
}