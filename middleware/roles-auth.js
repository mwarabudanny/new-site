var jwtDecode = require('jwt-decode');

module.exports =  {

    admin_role:(req, res, next) =>{
        try {
            var decoded = jwtDecode(req.headers.authorization);
            console.log(decoded)
            var user_type=decoded.user_role;
            if (user_type=='Admin'){
             console.log(decoded.role);
             next();
            }
            else{
               return res.status(401).json({
                   message: 'Permission Denied!'
               });
            }
            
       } catch (error) {
           return res.status(401).json({
               message: 'Role auth  fail'
           });
       }

    }
   
};