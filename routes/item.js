var express = require('express');
var router = express.Router();

var mysql=require('mysql')
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'ymy2508'
})
/* GET home page. */
router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	pool.query('SELECT * FROM biao.item',function(err,rows){
		res.send(rows)
	})
})
router.post('/delete',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	var id=req.body.id
	pool.query('DELETE FROM biao.item WHERE id='+id , function(err,rows){
		res.send(rows)
	})
})
router.post("/insert",function(req,res,next){
	var aa=req.body.name;
	res.header('Access-Control-Allow-Origin','*');
	pool.query('INSERT INTO biao.item(name) VALUES ("'+aa+'")',function(err,rows){
		res.send(rows)
	})
})
module.exports = router;
