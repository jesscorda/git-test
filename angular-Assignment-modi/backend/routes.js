var express=require('express');
var app=express();
const router=express.Router();
var mysql = require('mysql');
var database="backend";
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var multer = require('multer');
var path = require('path');
const nodemailer = require('nodemailer');
var otplib =require('otplib');
config_data = require('./config/config.json');
var cors = require('cors');
app.use(cors())


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');

  next();
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "backend"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Mysql Connected!");
  });

  router.post ('/Login', (req,res) => {
    var email=req.body.email;
    var password=req.body.password;
    var SocialSignIn=SocialSignIn;
    var RegId;
    con.query('SELECT * FROM Register WHERE Email = ?',[email], function (error, results, fields) {
    
      if (error) {
        res.send(500,{
            message:'Error occured on server.Please try again later'
        });
      }else if(results.length >0){
          bcrypt.compare(password, results[0].UserPassword, function(err, resp) {
          
           if(resp){
          var jwttoken=results[0].Token;
            if(resp &&(results[0].Email==email) && (results[0].IsVerified=="true")){          
     if(!SocialSignIn){
       console.log("here inside not")
          con.query('select * from Register where Register.Email=?',[email], function (err, result) {
            RegId=result[0].RegId;
            namef=result[0].FirstName
            namel=result[0].LastName
            email=result[0].Email
      console.log("here inside not")              
          con.query('select * from UserProfile where UserProfile.RegId=?',[RegId], function (err, result) {
            if(result.length>0){                  
            console.log('Login Reg')
            fname=result[0].FirstName;
             lname=result[0].LastName;
             phone=result[0].Phone;
             city=result[0].City;
             email=result[0].Email;
             bio=result[0].Bio;
             gender=result[0].Gender;  
            file=(result[0].ImageFile);  
                     
            res.send(200,{
              "success":true,
              "isVerified":true,
              email,
              jwttoken,
              fname,lname, phone,city, email,bio,gender,file
            });
          }
          else{ 
            fname=namef;
            lname=namel;
            console.log(result[0]);
            console.log('length '+result.length)
            console.log("false")
            res.send(200,{
              "success":true,
              "isVerified":true,
              email,
              jwttoken,
              fname,
              lname
          })
          }

         })
        })
        }else if(SocialSignIn){
          console.log("here inside is")
      con.query('select * from SocialSignIn where SocialSignIn.Email=?',[email], function (err, result) {
          SId=result[0].SocId;
          namef=result[0].FirstName
          namel=result[0].LastName
              
      con.query('select * from UserProfile where UserProfile.SocId=?',[SId], function (err, result) {
        if(result.length>0){
          console.log('Login Soc')
          fname=result[0].FirstName;
          lname=result[0].LastName;
          phone=result[0].Phone;
          city=result[0].City;
          email=result[0].Email;
          bio=result[0].Bio;
          gender=result[0].Gender;  
         file=(result[0].ImageFile);  
                  
         res.send(200,{
           "success":true,
           "isVerified":true,
           email,
           jwttoken,
           fname,lname, phone,city, email,bio,gender,file
         })         
      }
      else{ 
        fname=namef;
        lname=namel;
       
        console.log(result[0]);
        console.log('length '+result.length)
        console.log("false")
        res.send(200,{
          "success":true,
          "isVerified":true,
          email,
          jwttoken,
          fname,
          lname,
          
        })
      }
    })
  })
}
        }else if((results[0].Email!=email) && (results[0].IsVerified=="true")){
              res.send(200,{
                "success":false,
                "isVerified":true
              });
            }
            else if((results[0].Email==email) && ((results[0].IsVerified=="false")|| results[0].IsVerified==null)){
              res.send(200,{
                "success":false,
                "isVerified":false,
              });
            }
         else if((results[0].Email!=email) && ((results[0].IsVerified=="false")|| results[0].IsVerified==null)){
          res.send(200,{
            "isVerified":false,
            "success":false,
          });
        }
      }  
        else{
          if(results[0].Email==email){
            res.send(200,{
              "success":false,
            });
          }
        } 
      });             
    }   
    else if( (results.length == 0)){
      console.log("here")
      res.send(200,{
        "success":false
      });
    }
        });   
});
  
router.post ('/ForgotPassword', (req,res) => {
  var email=req.body.email;
   
  con.query('SELECT * FROM Register WHERE Email = ?',[email], function (error, results, fields) {
 if (error) {
      res.send(500,{
          message:'Error occured on server.Please try again later'
      })
    }else{
      if(results.length >0){
          if(email==results[0].Email){
            let transporter = nodemailer.createTransport({
              service : 'gmail',
              secure :false,
              port :25,
              auth : {
                  user: 'wirelessbrain47@gmail.com',
                  pass: 'music2015'
              },
              tls: {
                  rejectAuthorized : false
              }
          
          });
          let HelperOptions = {
            from : "Nodemailer'<do-not-reply@gmail.com>'",
            to : email,
            subject : 'Password reset link',
            html : '<p>Please click <a href="http://localhost:4000/Reg"> here </a> to reset your password</p>'
          };
          
          transporter.sendMail(HelperOptions, (err, info) => {
            if(err){
                console.log(err);
            }
            console.log("Message was sent");
            console.log(info);
          }) 
            res.send(200,{
              "success":true
            });
          }else{
            
          }
      }
      else{
        res.send(200,{
          "success":false
        });
      }
    }   
      });
      

    }); 

router.post('/Registration', (req,res) => {
    var fname=req.body.fname;
    var lname=req.body.lname;
    var cname=req.body.cname;
    var country=req.body.country;
    var email=req.body.email;
    var password=req.body.password;     
    const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
    const otp = otplib.authenticator.generate(secret);
    console.log(otp);

    con.query('SELECT * FROM Register where Email=?',[ email ], function (err, result) {

    if(result.length==0){  
      res.send(200,{
        "success":true
      });
    var token =jwt.sign({email}, 'secretkey');
    bcrypt.hash(password, 10, function(err, hash) {  
      // Store hash in database      
      
    con.query('insert into Register(FirstName,LastName, CompanyName, Country, Email, UserPassword, Token, Otp) values (?,?,?,?,?,?,?,?)',[fname,lname, cname, country, email, hash, token,otp ], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      let transporter = nodemailer.createTransport({
        service : 'gmail',
        secure :false,
        port :25,
        auth : {
            user: 'wirelessbrain47@gmail.com',
            pass: 'music2015'
        },
        tls: {
            rejectAuthorized : false
        }
    
    });
    let HelperOptions = {
      from : "Nodemailer'<do-not-reply@gmail.com>'",
      to : email,
      subject : 'OTP for Registration',
      html : '<p>This is your OTP</p>'+otp+"<p>Please enter this OTP in the page that you are re-directed to</p>"
    };
    
    transporter.sendMail(HelperOptions, (err, info) => {
      if(err){
          console.log(err);
      }
      console.log("Message was sent");
      console.log(info);
    })
     
    });
  });
}
  else{
    res.send(200,{
      "success":false
    })
  }
    });
  });

    router.post('/Profile', (req,res) => {
      var fname=req.body.fname;
      var lname=req.body.lname;
      var phone=req.body.phone;
      var city=req.body.city;
      var email=req.body.email;
      var bio=req.body.bio;
      var gender=req.body.gender;
      var file=req.body.file;
      var token= req.body.token;
      var loginEmail=req.body.loginEmail;
      var RegId;
      var results;
      jwt.verify(token, 'secretkey', function(err, decoded) {
            
      if(decoded.email==loginEmail)
      {   
             
  con.query('select Register.RegId from Register where Register.Email=?',[loginEmail], function (err, result) {
    RegId=result[0].RegId;
    console.log(RegId);
  
    con.query('select UserProfile.RegId from UserProfile where UserProfile.RegId=?',[RegId], function (err, result) {
     results=result.length;
      if(results==0){
        console.log(results)
        console.log('New Profile')
        
        con.query('INSERT INTO UserProfile(RegId,FirstName, LastName, Phone, City, email, bio, gender,ImageFile) VALUES(?,?,?,?,?,?,?,?,?)',[RegId,fname,lname,phone,city,email,bio,gender,file], function (err, result) {
        if (err) throw err;
       const user={fname,lname, phone,city, email,bio,gender};
        console.log("1 record inserted");
        res.json(200,{
          "success":true,
          fname,lname, phone,city, email,bio,gender
        });
      });    
    } else{
    con.query('UPDATE UserProfile SET FirstName=?, LastName=?, Phone=?, City=?, email=?, bio=?, gender=? where UserProfile.RegId=?',[fname,lname,phone,city,email,bio,gender,RegId], function (err, result) {
          res.send(200,{
        "success":true,
        fname,lname, phone,city, email,bio,gender
      });    
      })
    }
    })   
  }); 
  }  
});      });
      router.post('/RegSuccess', (req,res) => {
        var otp=req.body.otp;
        var email=req.body.email;
        con.query('SELECT * FROM Register WHERE Otp = ?',[otp], function (err, result) {
          if (err) {
            res.send(500,{
                message:'Error occured on server.Please try again later'
            })
          }else{
                if(result.length >0){
                if(otp==result[0].Otp){
                  isVerified="true";
                  con.query('UPDATE Register SET IsVerified ="true" WHERE Email=?',[email])
                  res.send(200,{
                    "success":true
                  });
                }}
            else{
              isVerified="false";
              con.query('UPDATE Register SET IsVerified ="false" WHERE Email=?',[email])
              res.send(200,{
                "success":false
              });
            }
          }
           
        });
        
      });
      router.post('/Reg', (req,res) => {
        var password=req.body.password;
        var email=req.body.email;
        bcrypt.hash(password, 10, function(err, hash) {  
        con.query('UPDATE Register SET UserPassword =? WHERE Email=?',[hash, email], function(err, result){
          if(!err){
            res.send(200,{
              "success":true
            });
          }
          else{
            res.send(200,{
              "success":false
            });
          }
        })
      });

      });
      app.use( express.static(path.join(__dirname, '/uploads')))
    
      var storage = multer.diskStorage({
        destination: function(req,file, cb){
          
          cb(null, './uploads');        
        },
        filename: function(req, file, cb){
         
          cb(null, file.originalname);
        }
      });
      var upload = multer({ storage: storage });
     
      router.post('/upload', upload.single('file'),(req,res) => {
        SocialSignIn=req.body.SocialSignIn;
        
        if(SocialSignIn == 'false'){

          console.log('inside reg'+SocialSignIn)
          con.query('select Register.RegId from Register where Register.Email=?',[req.body.email], function (err, results) {
          if(results.length>0){
           console.log('here') 
           console.log(results[0].RegId)
          con.query('UPDATE UserProfile SET ImageFile=? where UserProfile.RegId=?',[req.file.originalname,results[0].RegId], function (err, result) {
                    
            
            })
          }
          })
         } else if(SocialSignIn == 'true'){  
           console.log('inside soc'+typeof(SocialSignIn))
             console.log(req.file.path)  
            console.log('social')      
            con.query('select SocialSignIn.SocId from SocialSignIn where SocialSignIn.Email=?',[req.body.email], function (err, results) {
              if(results.length>0){
                SId=results[0].SocId;
                console.log(SId);
                console.log('soc inside')            
                con.query('UPDATE UserProfile SET ImageFile=? where UserProfile.SocId=?',[req.file.originalname,SId], function (err, resultsss) {
                 console.log(SId)           
                        
                  })
                 }
                })   }                       
          })

    router.post('/SocialSignIn', (req,res) => {
      var email=req.body.email;
      var name=req.body.name;
      var id=req.body.id;
      var token=req.body.token;

      con.query('SELECT * FROM SocialSignIn where Email=?',[ email ], function (err, result) {

        if(result.length==0){  
          res.send(200,{
            "success":true
          });                   
      con.query('insert into SocialSignIn(UserName, Email, SocialProviderId, Token) values (?,?,?,?)',[name ,email, id, token ], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

      })
    }
  })
    })

    router.post('/SocialLogIn', (req,res) => {
      email=req.body.email;
      token=req.body.token;
     
      con.query('SELECT * FROM SocialSignIn where Email=?',[ email ], function (err, results) {
       
    if(results.length>0){
      console.log(results[0].SId,results.length)
      con.query('select * from UserProfile where UserProfile.SocId=?',[results[0].SocId], function (err, result) {
        if(result.length>0){
          console.log("true")
          console.log(result[0]);
        console.log(result.length)
        fname=result[0].FirstName;
         lname=result[0].LastName;
         phone=result[0].Phone;
         city=result[0].City;
         email=result[0].Email;
         bio=result[0].Bio;
         gender=result[0].Gender;  
        file=(result[0].ImageFile);                   
        res.send(200,{
          "success":true,
          email,
          token,
          fname,lname, phone,city, email,bio,gender,file
        });
      } 
      else{
        name=(results[0].UserName).split(" ");;
        fname=name[0];
        lname=name[1];
        console.log(result[0]);
        console.log('length '+result.length)
        console.log("false")
        res.send(200,{
          "success":true,
           email,
          token,
          fname,lname
        })
      }  
    })
  }else{
    res.send(200,{
      "success":false,
       
    })
  }
      })

    })
    router.post('/SocialProfile', (req,res) => {
      var fname=req.body.fname;
      var lname=req.body.lname;
      var phone=req.body.phone;
      var city=req.body.city;
      var email=req.body.email;
      var bio=req.body.bio;
      var gender=req.body.gender;
      var file=req.body.file;
      var token= req.body.token;
      var loginEmail=req.body.loginEmail;
      var SId;
      var results;
                
  con.query('select SocialSignIn.SocId from SocialSignIn where SocialSignIn.Email=?',[loginEmail], function (err, result) {
    SId=result[0].SocId;
    console.log(SId);
  
    con.query('select UserProfile.SocId from UserProfile where UserProfile.SocId=?',[SId], function (err, result) {
     results=result.length;
      if(results==0){
        console.log(results)
        console.log('New Profile')
        
        con.query('INSERT INTO UserProfile(SocId,FirstName, LastName, Phone, City, email, bio, gender,ImageFile) VALUES(?,?,?,?,?,?,?,?,?)',[SId,fname,lname,phone,city,email,bio,gender,file], function (err, result) {
        if (err) throw err;
       const user={fname,lname, phone,city, email,bio,gender};
        console.log("1 record inserted");
        res.json(200,{
          "success":true,
          fname,lname, phone,city, email,bio,gender
        });
      });    
    } else{
    con.query('UPDATE UserProfile SET FirstName=?, LastName=?, Phone=?, City=?, email=?, bio=?, gender=? where UserProfile.SocId=?',[fname,lname,phone,city,email,bio,gender,SId], function (err, result) {
          res.send(200,{
        "success":true,
        fname,lname, phone,city, email,bio,gender
      });    
      })
    }
    })   
  }); 
    
     });
    
module.exports=router;