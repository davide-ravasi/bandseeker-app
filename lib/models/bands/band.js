import mongoose, { Schema } from "mongoose";
import { UsersSchema } from "../users/user";

const BandsSchema = new Schema(
  {
    name: {
      type: String,

      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
    },
    foundation_date: {
      type: Date,
    },
    email: {
      type: String,
    },
    genres: [
      {
        name: { type: String },
      },
    ],
    videos: [
      {
        title: { type: String },
        url: { type: String },
      },
    ],
    images: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
    avatar: {
      name: { type: String },
      url: { type: String },
    },
    members: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
  },
  { timestamps: true }
);

const Band = mongoose.models.Band || mongoose.model("Band", BandsSchema);

export { Band, BandsSchema };
