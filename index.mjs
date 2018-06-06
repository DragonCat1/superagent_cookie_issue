import Express from 'express'
import Superagent from 'superagent'

const app = Express()
let i = 99
app.use('/', (req, res) => {
  res.cookie(String.fromCharCode(i++), i).send(req.headers.cookie)
})

app.listen(8080, () => {
  const header = { Cookie: 'a=1;b=2' }
  const agent = Superagent.agent().set(header)
  agent.get('http://localhost:8080/').then((data) => {
    console.log(data.text)
    return agent.get('http://localhost:8080/')
  }).then((data) => {
    console.log(data.text)
    return agent.get('http://localhost:8080/')
  }).then((data) => {
    console.log(data.text)
  })
})
