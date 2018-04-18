var router = express.Router();
var teacher = require('./routes/teacher');
var student = require('./routes/student');

// router.get('/tours',function(req,res){
    
//   Tour.find({},function(err,name){
//     if(err){
//       console.log("Get the error" + err);
//       throw err;
//     }
//     else{ 
//       console.log("Tour.find({})"); 
//       res.send(name);  
//     }

//   })
// });
