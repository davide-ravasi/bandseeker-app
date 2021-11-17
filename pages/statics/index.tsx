import type { NextPage } from "next";
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";

const Home: NextPage = ({ router: Query }) => {
  const router = useRouter();
  const query = router.query;
  const type = query.type;

  return (
    <div>
      <Header />
      <Container>
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
            <p><a href="https://github.com/zxcv3" target="_blank">@zxcv <FontAwesomeIcon icon={faAngleRight} /></a></p>
            <p><a href="https://github.com/davide-ravasi" target="_blank">@davide-ravasi <FontAwesomeIcon icon={faAngleRight} /></a></p>
            <p><a href="https://github.com/akeemoduola" target="_blank">@oakeem <FontAwesomeIcon icon={faAngleRight} /></a></p>
            <p>If you like the app, feel free to fork this repository or open a pull request</p>
          </SimpleText>
          }
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
        position: relative;
        display: flex;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        max-width: 1100px;
        margin: 0 auto;
        min-height: calc(100vh - 130px);
        `;

const SectionTitle = styled.h1`
        position: relative;
        height: 25px;
        width: 100%;

        font-family: Advent Pro;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        margin: 50px 20px 0;
        align-items: start;

        color: #757780;
        `;

const SectionContainer = styled.div`
        position: relative;
        flex-wrap: wrap;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin: 10px 20px;
        `;

const SimpleText = styled.div`
        font-family: Lato, sans-serif;
        color: #fff;

        a {
          color: ${props => props.theme.colors.yellow};

          &:hover {
            color: ${props => props.theme.colors.lightgrey};
          }
        }
        `;

export default withApollo(Home);
