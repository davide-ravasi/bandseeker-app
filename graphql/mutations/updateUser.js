import { gql } from "apollo-server-core";

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $UserUpdateInput: UserUpdateInput) {
    updateUser(id: $id, input: $UserUpdateInput) {
      id
      name
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

export default UPDATE_USER;