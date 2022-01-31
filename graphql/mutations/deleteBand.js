import { gql } from "apollo-server-core";

const DELETE_BAND = gql`
  mutation deleteBand($id: ID!) {
    deleteBand(id: $id)
  }
`;

export default DELETE_BAND;