import { gql } from "apollo-server-core";

const NEW_BAND = gql`
  mutation NewBand($BandCreateInput: BandCreateInput) {
    newBand(input: $BandCreateInput) {
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

export default NEW_BAND;