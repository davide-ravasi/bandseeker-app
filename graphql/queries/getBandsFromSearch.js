import { gql } from "apollo-server-core";

const GET_BANDS_FROM_SEARCH = gql`
  query getBandsFromSearch($type: String, $text: String) {
    getBandsFromSearch(type: $type, text: $text) {
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
        name,
        nickname,
        description,
        instruments {
          name
        }
        avatar {
          url
        }
      }
      avatar {
        url
      }
    }
  }
`;

export default GET_BANDS_FROM_SEARCH;
