export type NameObj = {
  name: string
}

export type Video = {
  title: String
  url: string
}

export type NameUrlObj = {
  name: string
  url: string
}

export type ManageBandSectionProps = {
  id: string
}

export type ElementCardProps = {
  element: Band | User
}

export type TagListProps = {
  title?: string;
  tags: [NameObj],
  searchBy?: string,
  cb?: (search: string, searchBy: string) => void,
}

export type BasicEntityData = {
  id?: number,
  name: string,
  description: string,
  email: string,
  genres: [NameObj],
  avatar: NameUrlObj,
}

export type Band = BasicEntityData &
{
  location: string,
  foundation_date: Date,
  videos: [Video],
  images: [NameUrlObj],
  members: [User]
  searching: [NameObj],
}


export type User = BasicEntityData &
{
  nickname: string,
  birth_date: string,
  address: string,
  instruments: [NameObj],
}