import {
  faEnvelope,
  faMapMarkerAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled, { css } from "styled-components";

// import { ManagePhotos } from "../../components/managephotos";
import Layout from "../../components/layout";
import TagList from "../../components/taglist";
// import { UserInputError } from "apollo-server-core";

export const PageDetails = ({ date, cb, contents }) => {
  return (
    <Layout isBlock={false}>
      <HalfCol>
        <Avatar
          src={contents.avatar}
          alt={contents.name}
        />
      </HalfCol>
      <HalfCol>
        <SectionTitle>
          <div style={{ float: 'left' }}>{contents.name}</div>
          <div style={{ float: 'left' }}>{contents.genres && <TagList tags={contents.genres} cb={cb} />}</div>
        </SectionTitle>
        {contents.nickname && <SectionSubtitle>
          Nickname: {contents.nickname}
        </SectionSubtitle>
        }
        <SectionDescription>{contents.description}</SectionDescription>
        {contents.location && <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:{" "}
          </span>
          {contents?.location}
        </SectionInfos>}
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address:{" "}
          </span>
          {contents.address}
        </SectionInfos>
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faCalendar} /> 
            {contents.searching ? ' Foundation date: ' : ' Birth date: '}{" "}
          </span>
          {date}
        </SectionInfos>
        <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> Contacts:{" "}
          </span>
          {contents.email}
        </SectionInfos>
        {contents.instruments && <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> Instruments:{" "}
          </span>
          {contents.instruments?.length && contents.instruments.map(instrument => instrument.name)}
        </SectionInfos>}
        {contents.searching && <SectionInfos>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> Instruments:{" "}
          </span>
          {contents.searching?.length && contents.searching.map(search => search.name)}
        </SectionInfos>}
      </HalfCol>
    </Layout>
  );
}

const sharedFontStyle = css`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
`

const HalfCol = styled.div`
  flex: 0 1 50%;
  &:last-child {
    padding-left: 20px;
  }
`;
const SectionTitle = styled.h2`
  ${sharedFontStyle}
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.yellow};
`;
const SectionSubtitle = styled.h3`
  ${sharedFontStyle}
  clear: both;
  font-size: 18px;
  color: ${(props) => props.theme.colors.cyan};
`;
const SectionDescription = styled.p`
  ${sharedFontStyle}
  clear: both;
  padding: 15px 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightgrey};
`;
const SectionInfos = styled.p`
  ${sharedFontStyle}
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightgrey};

  & > span {
    color: ${(props) => props.theme.colors.cyan};
  }
`;
const Avatar = styled.img`
  width: 100%;
`;