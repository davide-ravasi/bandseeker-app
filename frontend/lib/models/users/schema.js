import { gql } from 'apollo-server-micro'

const userTypeDefs = gql`
  type User {
    id: ID
    name: String
    nickname: String
    description: String
    email: String
    birth_date: String
    address: String
    instruments: [String]
    avatar: Image
  }

  input UserCreateInput {
    name: String
    nickname: String
    description: String
    email: String
    birth_date: String
    address: String
    avatar: ImageInput
  }

  input UserUpdateInput {
    name: String
    nickname: String
    description: String
    email: String
    birth_date: String
    address: String
    instruments: [String]
    avatar: ImageInput
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    newUser(input: UserCreateInput): User
    updateUser(id: ID!, input: UserUpdateInput): User
    deleteUser(id: ID!): String
  }
`

module.exports = userTypeDefs
