export type genre = {
  name: String
}

export type ManageBandSectionProps = {
  id: string
}

export interface ElementCardProps {
  element: Band | User
}

export interface TagListProps {
  title?: string;
  tags: [{ name: string }],
  searchBy?: string,
  cb?: (search: string) => void,
}

export interface Band {
  name: string,
  description: string,
  location: string,
  foundation_date: Date,
  email: string,
  genres: [{ name: string }],
  videos: [{ title: string, url: string }],
  images: [{ name: string, url: string }],
  avatar: { name: string, url: string },
  searching: [{ name: string }],
}

export interface User {
  name: string,
  nickname: string,
  description: string,
  email: string,
  genres: [{ name: string }],
  birth_date: Date,
  address: string,
  instruments: [{ name: string }],
  avatar: { url: string },
}