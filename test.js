let express = require("express")

let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res){
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" type="text" autocomplete="off" />
      <button>Submit answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res){
  if (req.body.skyColor.toUpperCase() == "BLUE") {
    res.send(`
      <p>Congrat, it's the correct answer</p>
      <a href="/">Back to homepager</a>
      `)
  } else {
    res.send(`
      <p>Sorry, that is incorrect</p>
      <a href="/">Back to homepager</a>
      `)
  }
})

ourApp.get('/answer', function(req, res){
  res.send("Are u lost there is nothing to see here")
})

ourApp.listen(3000)

