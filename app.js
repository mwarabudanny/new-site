  const express=require('express'); //this import express to this page
  const app =express(); // this call the express methods 
  const morgan=require('morgan')
  const bodyParser=require('body-parser')
  const mongoose=require('mongoose')
  const jquery=require('jquery')
  //const user_role=require('./api/routes/user_role')
  //const html_render=require('../api/all_files_project/temple_render/index')
  const user=require('./routes/user')
  const device=require('./routes/device')
  const weather=require('./routes/weather');// this call the product api from the routes folder
  var connection_string='mongodb+srv://dannynho:'+process.env.Monog_PW+'@ourdb-uczbc.mongodb.net/test?retryWrites=true&w=majority'
  mongoose.connect(connection_string,{useUnifiedTopology: true,useNewUrlParser: true,})
  mongoose.set('useCreateIndex', true);
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json()) 
  app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
  app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");
 // res.header('Access-Control-Allow-Origin:http://localhost:3000/api/user/login')
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

//app.use('/',html_render);
//app.use('/api/products',user_role);
app.use('/api/device',device);
app.use('/api/user',user);
app.use('/api/weather',weather);

app.use((req,res,next)=>{
  const error =new Error('not found');
  error.status(404);
  next(error)
   
})  

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({error:{
    message:error.message
  }})
  
})

module.exports=app; //this makes the app.js available on call from any other jS file