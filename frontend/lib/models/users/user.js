import mongoose, { Schema } from 'mongoose'
import 'mongoose-type-url'

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
    type: String
  },
  description: {
    type: String,
    trim: true,
  },
  email: {
    type: String
  },
  birth_date: {
    type: Date
  },
  address: {
    type: String
  },
  instruments: [{
    name: {type: String, required: true}
  }],
  avatar: {
    name: {type: String, required: true},
    url: {type: String, required: true}
  },
},
{ timestamps: true })

const User = mongoose.models.User || mongoose.model('User', UsersSchema)

export {
  User,
  UsersSchema
}