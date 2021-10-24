import mongoose, { Schema } from 'mongoose';

const ImagesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const VideosSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: mongoose.SchemaTypes.Url,
    required: true
  }
});

const GenresSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const InstrumentsSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    index: { unique: true }
  },
  image: String,
  birthday: { type: Date },
  address: {
    type: String,
    required: true,
    trim: true,
    min: 10,
    max: 100,
  },
  instruments: [InstrumentsSchema]
}, { timestamps: true }));

export const BandsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  foundation_date: {
    type: Date
  },
  images: [ImagesSchema],
  videos: [VideosSchema],
  genres: [GenresSchema],
  members: [UsersSchema]
}, { timestamps: true });

export default mongoose.models.bands || mongoose.model('bands', BandsSchema);
