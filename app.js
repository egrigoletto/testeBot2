var router = express();

//Caminho para receber get 
router.get('/webhook', function(req, res){
    res.send('ok')
});