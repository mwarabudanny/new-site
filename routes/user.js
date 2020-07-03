const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const confirmation_email = require("../emails/user_confirmation_email");
const reset_email = require("../emails/user_forgotPass");

router.post("/signup", (req, res, next) => {
User.find( 
    { $or: [{ user_id: req.body.user_id },{email: req.body.email}] },)
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "User  or email exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
             const user = new User({
              _id: new mongoose.Types.ObjectId(),
              user_id:req.body.user_id,
              name:req.body.name,
              surname:req.body.surname,
              phone:req.body.phone,
              du_id:req.body.du_id,
              email: req.body.email,
              role: req.body.role,
              password: hash,

            });
            user.save()
              .then(result => {

                 const token = jwt.sign(  { _id:result._id,user_id: result.user_id, email: result.email}, process.env.JWT_KEY,{expiresIn: "1d"});
                 get_email=req.body.email;
                 confirmation_email.confirmation_email_func(get_email,token).catch(console.error);

                var email=req.body.email
                console.log("All Data"+result);
                res.status(201).json({
                  message: "User created please confirm email"
                });
              })
              .catch(err => {
                //console.log(err);
                if (err.code==11000){
                  res.json({
                    error: "user name or email have been taken"
                  }); 
                }
              
                 res.status(500).json({
                  error: err
                }); 
              });
          }
        });
      }
    });
});

router.get('/confirmation/:tokenV',(req, res,next) => {
  var verification_token= req.params.tokenV ;
  if ( verification_token){
   var token_get=jwt.verify(verification_token,process.env.JWT_KEY);
   console.log(token_get)
   var _id=token_get._id
   User.update({ _id }, { $set: { user_status: "Active" }  })
   .exec()
   .then(result => {
     console.log(result);
     res.status(200).json({
      message: "confirmation was succeessful / please LOGIN on System"});
     
   }) .catch(err => {
     console.log('££££££££££££££££££££'+err);
     res.status(401).json({
       message: "Date expired"
     });
   });

  }
});

router.get('/forgotPass/:user_id',(req, res) => {
    User.findOne({ user_id: req.params.user_id })
      .exec()
      .then(result => {
        console.log(" ALL DATA" +result.email)
        if(result){
          const token = jwt.sign(  { _id:result._id,user_id: result.user_id, email: result.email}, process.env.JWT_KEY,{expiresIn: "1h"});
          reset_email.reset_email_func(result.email,token).catch(console.error);

          res.status(200).json({
            message: "Please check ur Email to reset your password"
          });

        }
        else{
          res.status(401).json({
            message: "User doesnt Exist"
          });
        }
      
      })
      .catch(err => {
        res.status(401).json({
          message: "Error proccesing"
        });
      });  
});

router.get('/Reset_link/:Token',(req, res) => {
  var token=req.params.Token;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    
    try { var password=hash
      var token_get=jwt.verify(token,process.env.JWT_KEY);
      var _id=token_get._id;
      console.log("ID IS "+_id)
      if (_id){
        User.update({ _id }, { $set: {password}  })
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json({
           message: "Password reset was successful. Please log in with new password"});
          
        }) .catch(err => {
          console.log('££££££££££££££££££££'+err);
          res.status(401).json({
            message: "Date expired"
          });
        }); 
      }
      
      next();
  } catch (error) {
      return res.status(401).json({
          message: 'Auth failed error 401 exp token'
      });
  }




   

  })

  
  
});


router.post("/login", (req, res, next) => {
  User.find({ user_id: req.body.user_id })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed user does exist 1"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed level 2"
          });
        }
        if (result) {
          const token = jwt.sign(
            {  _id:user[0]._id,
              email: user[0].email,
              userId: user[0]._id,
              user_role: user[0].role
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1m"
            }
          );
          var status=user[0].user_status;
          if (status=='Active'){
            return res.status(200).json({
              message: "Auth successful",
              token: token,
              data: {
                role: user[0].role,
                user_id: user[0].user_id
  
              }
             });
          }else if (status=='Pending'){
            res.status(401).json({
              message: "Auth faild Pending for Approval by user"
            });
          }else {
              res.status(401).json({
              message: "Auth faild Contact Admin"
            });
          }
          
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;