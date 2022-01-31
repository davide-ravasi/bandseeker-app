import { gql } from "apollo-server-core";

const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
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

export default GET_USER;