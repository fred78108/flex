var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the Agent!!'});
});

router.get('/pop/:callerId',function(req,res){    
  res.render('caller', {caller: req.params.callerId});
});

router.get('/test', function(req,res){
  res.render('index', {title: 'you passed!'});
});

module.exports = router;
