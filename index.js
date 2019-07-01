const app = require('express')()
const http = require('http').createServer(app)

app.get('/',(req, res)=>res.send('<h1>HelloBoiiiiz</h1>'))
const port = process.env.PORT || 3000

http.listen(port, ()=>console.log(`listening on port: ${port}`))