var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  pool.query('SELECT * FROM news',function(err,rows){
    res.send(rows)
  })
});
router.post('/message', function(req, res, next) {
  var id=req.body.id;
  res.header('Access-Control-Allow-Origin','*');
  pool.query('SELECT * FROM news WHERE id='+id,function(err,rows){
    res.send(rows)
  })
});

module.exports = router;
