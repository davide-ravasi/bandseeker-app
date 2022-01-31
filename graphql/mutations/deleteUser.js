import { gql } from "apollo-server-core";

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export default DELETE_USER;