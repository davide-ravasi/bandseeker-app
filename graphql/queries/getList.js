import { gql } from "apollo-server-core";

const GET_LIST = gql`
  query getList($what: String) {
    getList(what: $what) {
      name
    }
  }
`;

export default GET_LIST;
