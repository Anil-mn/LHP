var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
          },
          email: {
            type: String,
            trim: true,
            required: true,
       
          },
          password: {
            type: String,
            required: true
             },
             role:{
              type: String,
              required: true
             }
       }
)

module.exports = Admin = mongoose.model("Admin", adminSchema);