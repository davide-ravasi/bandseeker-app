import { TagListProps } from "../../types";
import { TagListTitle, TagListWrapper, Button } from "./styles";

const TagList = ({ title, tags, searchBy, cb }: TagListProps) => {
  return (
    <>
      {title && <TagListTitle>{title}</TagListTitle>}
      <TagListWrapper>
        {tags && tags.slice(0, 3).map((tag, index: number) => {
          return <Button key={`${tag.name}-${tag.name}-${index}`} onClick={() => cb(tag.name, searchBy)}>{tag.name}</Button>
        })}
      </TagListWrapper>
    </>
  )
}

export default TagList;