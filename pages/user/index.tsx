import type { NextPage } from "next";
import { useState } from "react";
import GET_USER from "../../graphql/queries/getUser";
import { User } from '../../types/index';

// import { ManagePhotos } from "../../components/managephotos";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import { PageDetails } from '../../components/pagedetails';

const UserPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
    onCompleted: (data) => {
      const { name, nickname, avatar, address, description, email, genres, birth_date, instruments } = data.getUser;

      setUser({
        name,
        nickname,
        description,
        email,
        genres,
        birth_date,
        address,
        instruments,
        avatar: avatar.url
      })
    },
  });

  const search = async (searchQuery: string, searchBy: string) => {

    router.push({
      pathname: '/list/pagelist',
      query: {
        type: 'search',
        searchType: "user",
        searchBy: searchBy || "genre",
        searchQuery
      },
    })
  }

  const [user, setUser] = useState<User | undefined>();

  const dateFormatted = new Date(
    parseInt(user?.birth_date)
  ).toLocaleDateString();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {user && <PageDetails date={dateFormatted} cb={search} contents={user} />}
    </>
  );
};

export default withApollo(UserPage);
