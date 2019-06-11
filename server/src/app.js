let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function (req,res) {
    res.send('Hello nodejs server')
})

app.get('/hello/:person', function(req,res) {
    console.log.log('hello -' + req.params.person)
    res.send('sey hello with' + req.params.person)
})

//get user by id
app.get('/user/:userId', function(req,res){
    res.send('see data user' + req.params.userId)
})

//get all user
app.get('/users', function(req, res){
    res.send('requie data user')
})

//create user
app.post('/user/', function(req, res){
    res.send('create user' + JSON.stringify(req.body))
})

//edit user
app.put('/user/:userId', function(req,res) {
    res.send('edit user' + req.params.userId + ':'+
    JSON.stringify(req.body))
})

//delete user
app.delete('/user/:userId', function(req,res){
    res.send('Delete' + req.params.userId+ ':'+
    JSON.stringify(req.body))
})

let port = 8081
app.listen(port, function () {
    console.log('server running on' + port)
})
