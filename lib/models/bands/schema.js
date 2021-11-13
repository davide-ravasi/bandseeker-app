import { gql } from "apollo-server-micro";

const bandTypeDefs = gql`
  type Genre {
    name: String
  }

  type Video {
    title: String
    url: String
  }

  type Image {
    name: String
    url: String
  }

  type User {
    name: String
    nickname: String
    description: String
    email: String
    birth_date: String
    address: String
    instruments: [String]
    avatar: Image
  }

  # Bands
  type Band {
    id: ID
    name: String
    description: String
    location: String
    email: String
    foundation_date: String
    genres: [Genre]
    videos: [Video]
    images: [Image]
    avatar: Image
    members: [User]
  }

  input GenreInput {
    name: String
  }

  input VideoInput {
    title: String
    url: String
  }

  input ImageInput {
    name: String
    url: String
  }

  input UserInput {
    name: String
    nickname: String
    description: String
    email: String
    birth_date: String
    address: String
    instruments: [String]
    avatar: ImageInput
  }

  input BandCreateInput {
    name: String
    description: String
    location: String
    foundation_date: String
    email: String
    genres: [GenreInput]
    videos: [VideoInput]
    images: [ImageInput]
    avatar: ImageInput
  }

  input BandUpdateInput {
    name: String
    description: String
    location: String
    foundation_date: String
    email: String
    genres: [GenreInput]
    videos: [VideoInput]
    images: [ImageInput]
    avatar: ImageInput
    members: [UserInput]
  }

  type Query {
    getBands: [Band]
    getBand(id: ID!): Band
  }

  type Mutation {
    newBand(input: BandCreateInput): Band
    updateBand(id: ID!, input: BandUpdateInput): Band
    deleteBand(id: ID!): String
  }
`;

module.exports = bandTypeDefs;
