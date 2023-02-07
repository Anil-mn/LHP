const bcrypt = require('bcryptjs');
const Admin = require('../../models/admin')
exports.login = (req,res)=>{
   res.json({
    "message":"Login route"
   })
}

exports.register = async (req,res) =>{
  // const errors = validationResult(req);
   //  if (!errors.isEmpty()) {
   //      return res.status(422).json({
   //        error: errors.array()[0].msg
   //      });
   //    }
  const admin =new Admin(req.body);
  admin.save((err,admin)=>{
      if(err){
        return res.status(400).json({
            err: "NOT able to save user in DB"
          });
      }
      res.json({
        name: admin.name,
        email: admin.email,
        role: 'admin',
        password: admin.password
      });
  })    
   
}