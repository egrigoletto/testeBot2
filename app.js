var express = require('express');

var router = express();

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

//Caminho para receber get 
router.get('/webhook', function(req, res){
    res.send('ok')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})