import mongoose, { Schema } from 'mongoose'
import { UsersSchema } from '../users/user'

const BandsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: String
  },
  foundation_date: {
    type: Date
  },
  genres: [{
    name: {type: String, required: true}
  }],
  videos: [{
    title: {type: String, required: true},
    url: {type: String, required: true}
  }],
  images: [{
    name: {type: String, required: true},
    url: {type: String, required: true}
  }],
  avatar: {
    name: {type: String, required: true},
    url: {type: String, required: true}
  },
  members: [UsersSchema],
},
{ timestamps: true })

const Band = mongoose.models.Band || mongoose.model('Band', BandsSchema)

export {
  Band,
  BandsSchema
}