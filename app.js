var express = require('express');

var router = express();

router.set('port', (process.env.PORT || 3000))
router.use(express.static(__dirname + '/public'))

//Caminho para receber get 
router.get('/webhook', function(req, res){
    //tenta fazer um pacto com o fb pelo subscribe da requisição, se esse subscribe tiver a senha que eu setei no fb, ok
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === 'senhadofb')
    {
        console.log('validação ok!');
        //se a cada 24 horas o fb não receber um status 200, ele derruba sua aplicação
        res.status(200).send(req.query['hub.challenge']);
    }
    else
    //outra aplicação tentando acessar o webhook
    {
        console.log('validação falhou!');
         res.sendStatus(403);
    }
});

//------------------
//Checa se o app está rodando na porta que escolhi
//TODO - testar sem a porta e ver se sai por padrão
router.listen(router.get('port'), function() {
  console.log("Node app está rodando em localhost(do servidor):" + router.get('port'))
})