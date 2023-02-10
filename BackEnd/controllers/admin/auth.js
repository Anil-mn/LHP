const bcrypt = require('bcryptjs');
const Admin = require('../../models/admin')
exports.login = (req,res)=>{
   res.json({  
    "message":"Login route"
   })
}

exports.register = async (req,res) =>{
  const {email,name,password} = req.body
  const admin =new Admin({
    email,
    name,
    password,
    role:'admin'
  });
  const alreayEmail =await Admin.findOne({email})

  if(alreayEmail){
    return res.status(400).json({
      err: "Email Already exist"
    });
  }
  admin.save((err,admin)=>{
      if(err){
        return res.status(400).json({
            err: "NOT able to save user in DB"
          });
      }
      res.json({
        Message:'Registration sucess full',
        details: {
          name: admin.name,
          email: admin.email,
          role: 'admin',
          password: admin.password
        }
        
      });
  })    

}
exports.login = async (req,res) =>{
  const {email,password} = req.body
  const alreayEmail = await Admin.findOne({email})
  if(alreayEmail){
    return res
    .status(400)
    .json({
      Message:'Login Successfully',
      details:{
        alreayEmail
      }
    })
  }
  else {
    return res.status(200).json({message:'Email not match'})
  }
}
 