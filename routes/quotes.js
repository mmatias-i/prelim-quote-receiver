var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log("entered prelim quote endpoint");
  if (!req.body) {
    throw Error;
  }
  let leadData = req.body;
  setTimeout(() => {
    console.log("finished timeout");
    res.send('Success');
  }, 3000);
});

module.exports = router;
