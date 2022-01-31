import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    getUsers {
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

export default GET_USERS;