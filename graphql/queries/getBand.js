import { gql } from "apollo-server-core";

const GET_BAND = gql`
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      name
      description
      location
      foundation_date
      email
      genres {
        name
      }
      searching {
        name
      }
      videos {
        title
        url
      }
      images {
        name
      }
      members {
        name
      }
      avatar {
        url
      }
    }
  }
`;

export default GET_BAND;