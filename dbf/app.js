var express = require('express');

var router = express.Router();
var teacher = require('./routes/teacher');
var student = require('./routes/student');

router.post('/student',function(req,res,next){
    let id = req.body.id;
    let password = req.body.password; 
    console.log(req.body);
  student.findOne({'id':id,'password':password}).then(function(studentdata){
    console.log(studentdata);
    res.send(studentdata); 
  }).catch(next);    
 });
 
 router.post('/addstudent',function(req,res,next){ 
  console.log(req.body);
student.create(req.body).then(function(studentdata){
  console.log(studentdata);
  res.send(studentdata); 
}).catch(next);    
});

module.exports = router;
