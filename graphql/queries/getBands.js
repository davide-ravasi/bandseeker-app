import { gql } from "@apollo/client";

const GET_BANDS = gql`
query getBands {
  getBands {
    id
    name
    description
    location
    foundation_date
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
      },
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

export default GET_BANDS;