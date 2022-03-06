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






var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
var fs = require('fs')

let upload = multer({
  storage: multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, './uploads/');
      },
      filename: function (req, file, cb) {
          var changedName = (new Date().getTime())+'-'+file.originalname;
          cb(null, changedName);
      }
  })
});

router.post('/postImg', upload.array('file',12),(req, res, next)=> {  
  try{
    // console.dir(JSON.parse(req.body.file))
    let file = req.file;
    console.log(file)
    //存储上传对象信息
    let fileInfo = {};
    //修改名字，第一个参数为旧路径，第二个参数为新路径（注意：旧路径要和上面的dest保持一致）
    // fs.renameSync('./public/upload_tmp/' + file.filename, './public/images/' + file.originalname);
    // 获取文件信息
    // fileInfo.mimetype = file.mimetype;
    // fileInfo.originalname = file.originalname;
    // fileInfo.size = file.size;
    // fileInfo.path = file.path;
  }catch(err){
  }
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
