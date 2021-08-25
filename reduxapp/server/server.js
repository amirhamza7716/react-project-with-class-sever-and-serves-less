// let d=require("./data")
// // console.log(data)
// // console.log(data.user);
// // console.log(data.name);
// // console.log(d.ahsan().name)
// console.log(d.a());



// let express = require('express');

// let myApp= express();

// myApp.get('/', function(req, res){

//     res.sendfile('./index.html');

// });

// myApp.get('/login', function(req, res){
    
//     res.sendfile('./hamza.jpg');
//     //res.end("hello g");
//     // res.json({
//     //     name:"Khurram"
//     // });

//     console.log("logging");
// });

// myApp.listen(7070, function(){    
//     console.log("I am chaling");
// });


// // let data = require('./data');

// // console.log(data.users)
// // console.log(data.sayHello())



// common JS format
let express = require('express');
let bodyparsor=require("body-parser")

let myApp= express();
myApp.use(bodyparsor.json());

myApp.get('/', function(req, res){

   
    res.sendfile('./build/index.html');

});
// myApp.use(function(req,res,next){
// next();
// })
// myApp.use(function(req,res,next){
//     next();
//     })


myApp.post('/signup', function(req, res){
    res.end("hello signup")
    let abc=req.body;
    console.log(abc);
    //res.sendfile('./build/hamza.jpg');
   // console.log("logging");
});
myApp.post('/login', function(req, res){
    res.end("hello login")
    let a=req.body;
    console.log(a);
});

myApp.use(express.static('./server/build'));
myApp.use(express.static('./server/build3'));

myApp.use(function(err, req, res, next){

    console.log(err);

})

myApp.listen(7070, function(){    
    console.log("I am chaling");
});


