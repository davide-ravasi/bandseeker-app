import styled from "styled-components";

export const globalMargin = '8px';

export const CardContainer = styled.div`
  width: 224px;
  height: 343px;
  position: relative;
  background: linear-gradient(180deg, #757780 0%, #242527 100%);
  border-radius: 13px;
  margin-right: 30px;
  margin-top: 10px;
  padding-bottom: 15px;
`;

export const ArrowButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 8px;
  top: 35%;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cyan};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 34px;
  height: 34px;
  cursor: pointer;

  & > svg {
    color: #fff;
    font-size: 28px;
  }
`;

export const GenresWrapper = styled.div`
  margin-top: -18px;
  margin-bottom: 2px;
  min-height: 30px;
`;

export const Location = styled.div`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${globalMargin};

  color: #c4c4c4;

  & > svg {
    margin-right: 4px;
    color: ${(props) => props.theme.colors.cyan};
  }
`;

export const CardImage = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 42%;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  border-radius: 13px 13px 0px 0px;
`;

export const CardTitle = styled.div`
  font-family: "Lato", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  clear: both;
  margin: ${globalMargin};
  color: ${(props) => props.theme.colors.yellow};
`;

export const CardDetail = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4c4c4;
  min-height: 48px;
  margin: ${globalMargin};
`;
