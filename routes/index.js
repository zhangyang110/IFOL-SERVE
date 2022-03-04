var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/getHomeCarousel', function (req, res, next) {
  // 可以通过req.body来获取post传递的键值对	
  let data = {
    name: 'xhm',
    age: 12
  }
  res.json({
    code: 0,
    msg: 'ok',
    data: data
  });

});

router.post('/postImg', function (req, res, next) {
  console.log(req.fields)
  console.log(req.files)
  console.log(res);
  let data = {
    name: 'xhm',
    age: 12
  }
  res.json({
    code: 0,
    msg: 'ok',
    data:data
  });
});

module.exports = router;
