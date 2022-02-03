import type { NextPage } from "next";
import { useState } from "react";

import { Band } from '../../types/index';
import GET_BAND from "../../graphql/queries/getBand";
// import Image from "next/dist/client/image";
// import { ManagePhotos } from "../../components/managephotos";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import { PageDetails } from "../../components/pagedetails";

const ManageBand: NextPage = ({ router: query }) => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_BAND, {
    variables: { id: id },
    onCompleted: (data) => {
      const { name, description, location, foundation_date, email, genres, videos, images, avatar, searching } = data.getBand;

      setBand({
        name,
        description,
        location,
        foundation_date,
        email,
        genres,
        videos,
        images,
        avatar: avatar.url,
        searching,
      });
    },
  });

  const search = async (searchQuery: string, searchBy: string) => {

    router.push({
      pathname: '/list/pagelist',
      query: {
        type: 'search',
        searchType: "band",
        searchBy: searchBy || "genre",
        searchQuery
      },
    })
  }

  const [band, setBand] = useState<Band | undefined>();

  const dateFormatted = new Date(
    parseInt(band?.foundation_date)
  ).toLocaleDateString();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {band && <PageDetails date={dateFormatted} cb={search} contents={band} />}
    </>
  );
};

export default withApollo(ManageBand);
