import { gql } from "apollo-server-core";

const NEW_USER = gql`
  mutation newUser($UserCreateInput: UserCreateInput) {
    newUser(input: $UserCreateInput) {
      id
      name
      nickname
      description
      email
      birth_date
      address
      genres {
        name
      }
      instruments {
        name
      }
      avatar {
        url
      }
    }
  }
`;

export default NEW_USER;