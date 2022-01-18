import styled from "styled-components";
import { TagListProps } from "../../types";

const TagList = ({ title, tags, cb }: TagListProps) => {
  return (
    <>
      {title && <TagListTitle>{title}</TagListTitle>}
      <TagListWrapper>
        {tags && tags.slice(0, 3).map((tag, index: number) => {
          return <Button key={`${tag.name}-${tag.name}-${index}`} onClick={() => cb(tag.name)}>{tag.name}</Button>
        })}
      </TagListWrapper>
    </>
  )
}

export default TagList;

const TagListTitle = styled.div<{ theme: { colors: { cyan: string } } }>`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin: 16px 8px 8px;
  color: ${(props) => props.theme.colors.cyan};
`;

const TagListWrapper = styled.div`
  position: relative !important;
  margin-top: 5px;
  margin-left: 3px;
`;

const Button = styled.button`
  position: relative;
  float: left;
  cursor: pointer;

  font-family: "Lato", sans-serif;
  text-transform: uppercase;

  font-size: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0;

  padding: 5px;
  top: 40.11%;
  margin-left: 5px;

  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`;