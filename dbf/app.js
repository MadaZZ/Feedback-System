var express = require('express');

var router = express.Router();
var teacher = require('./routes/teacher');
var student = require('./routes/student');

router.post('/student', function (req, res, next) {
  let id = req.body.id;
  let password = req.body.password;
  console.log(req.body);
  student.findOne({ 'id': id, 'password': password }).then(function (studentdata) {

    var id = studentdata.class;
    res.send(studentdata);
  }).catch(next);
});

router.post('/addstudent', function (req, res, next) {
  console.log(req.body.id);
  student.findOne({'id':req.body.id}).then(function (data){
    if(data == null)
    {
      student.create(req.body).then(function (studentdata) {
        console.log(studentdata+"asdsad");
        res.send(studentdata);
      }).catch(next);
    }
    else
    {
      console.log(data);
      res.send(null);
    }
  }).catch(next);
  
});

router.post('/addfaculty', function (req, res, next) {
  console.log(req.body);
  teacher.findOne({'id':req.body.id}).then(function(data1){
    if(data1 == null)
    {
      teacher.findOne({'subject':req.body.subject,'class':req.body.class}).then(function(data2){
        if(data2 == null)
        {
              teacher.create(req.body).then(function(teacherData){
                res.send(teacherData);
              }).catch(next);
        }
        else
        {
          res.send(null);
        }
      });
    }
    else
    {
      res.send(null);
    }
  });
  
});

router.post('/faculty', function (req, res, next) {
  let ids = req.body.id;
  let passwords = req.body.password;
  console.log(req.body);
  teacher.findOne({ 'id': ids, 'password': passwords }).then(function (studentdata) {
    console.log(studentdata);
    res.send(studentdata);
  }).catch(next);
});

router.get('/student', function (req, res) {
  student.find({}).then(function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

router.get('/faculty', function (req, res) {
  teacher.find({}).then(function (data) {
    res.send(JSON.stringify(data));
  });
});

router.get('/searchfaculty', function (req, res) {
  let Class=req.query.Class; 
  teacher.find({Class}).then(function (data) { 
    res.send(JSON.stringify(data));
  });
});

router.get('/getRatting', function (req, res) {
  let name = req.query.name;
  console.log(name);
  teacher.find({'name':name}).then(function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

router.post('/update', function (req, res, next) {
  
  console.log(req.body);
  let name = req.body.name;

    teacher.update({'name' : name}, {$set: {'rating': req.body.rating, 'reviews' : req.body.reviews}}).then(function (studentdata) {
      console.log(studentdata);
      res.send(studentdata);
    }).catch(next);
  });
  router.get('/searchTeachersName', function (req, res) {
    let name=req.query.name; 
    teacher.find({'name' : name}).then(function (data) { 
      console.log("asdasd " + data);
      res.send(JSON.stringify(data));
    });
  });

module.exports = router;
