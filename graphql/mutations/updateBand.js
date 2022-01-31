import { gql } from "apollo-server-core";

const UPDATE_BAND = gql`
  mutation UpdateBand($id: ID!, $BandUpdateInput: BandUpdateInput) {
    updateBand(id: $id, input: $BandUpdateInput) {
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
        url
      }
      avatar {
        name
        url
      }
    }
  }
`;

export default UPDATE_BAND;