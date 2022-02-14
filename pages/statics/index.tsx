import type { NextPage } from "next";
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import { SectionContainer, SectionTitle, SimpleText } from "../../styles/main.styles";

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const query = router.query;
  const type = query.type;

  return (
    <Layout isBlock={true}>
      <SectionTitle>
        {type === 'about-us' && 'ABOUT US'}
        {type === 'contacts' && 'CONTACTS'}
      </SectionTitle>
      <SectionContainer>
        {type === 'about-us' && <SimpleText>
          <p>This app is a job seeker for musicians.</p>
          <p>Members of the band who are looking to fill in a position (drummer, guitarist, bass player ....) can find it with the help of this app.</p>
          <p>Musicians who want to join a band can search for different bands that are registered and choose the ones they want to join.</p>
          <p>Musicians and band members can create a personal profile page and share it with all the Bandseeker community easily.</p>
        </SimpleText>}


        {type === 'contacts' && <SimpleText>
          <p>This app was developed by{" "}:</p>
          <p><a href="https://github.com/zxcv3" target="_blank" rel="noreferrer">@zxcv <FontAwesomeIcon icon={faAngleRight} /></a></p>
          <p><a href="https://github.com/davide-ravasi" target="_blank" rel="noreferrer">@davide-ravasi <FontAwesomeIcon icon={faAngleRight} /></a></p>
          <p><a href="https://github.com/akeemoduola" target="_blank" rel="noreferrer">@oakeem <FontAwesomeIcon icon={faAngleRight} /></a></p>
          <p>If you like the app, feel free to fork this repository or open a pull request</p>
        </SimpleText>
        }
      </SectionContainer>
    </Layout>
  );
};

export default withApollo(Home);
