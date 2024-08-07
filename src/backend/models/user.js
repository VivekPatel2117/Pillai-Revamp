import mongoose from "mongoose";
const userDetialSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    access: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true, 
    }
  }, {
    timestamps: true 
  });

const UserDetail = mongoose.models.admin || mongoose.model('admin',userDetialSchema,'admin');

export default UserDetail;