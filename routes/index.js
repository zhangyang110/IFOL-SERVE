var express = require('express');
var router = express.Router();
let app=express();
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

const multer = require('multer');
const upload=multer({dest:'upload/'})


router.post( "/postImg", upload.single('aa'), ( req, res ) => {
  console.log(req.body)
  console.log(req.files)
  res.json(
    {
      msg:'ok'
    }
  );
} );

module.exports = router;
