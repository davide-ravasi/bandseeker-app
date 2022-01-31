import { gql } from "apollo-server-core";

const GET_USERS_FROM_SEARCH = gql`
  query getUsersFromSearch($type: String, $text: String) {
    getUsersFromSearch(type: $type, text: $text) {
      id
      name
      nickname
      description
      email
      genres {
        name
      }
      instruments {
        name
      }
      birth_date
      address
      avatar {
        url
      }
    }
  }
`;

export default GET_USERS_FROM_SEARCH;