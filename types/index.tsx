export type genre = {
  name: String
}

export type ManageBandSectionProps = {
  id: string
}

export interface ElementCardProps {
  element: {
    id: string;
    name: string;
    description: string;
    location: string;
    foundation_date: string;
    email: string;
    genres?: [{ name: string }];
    searching?: [{ name: string }];
    instruments?: [{ name: string }];
    videos: [{ title: string, url: string }];
    images: [{ name: string, url: string }];
    avatar: { name: string, url: string };
  }
}

export interface TagListProps {
  title?: string;
  tags: [{ name: string }],
  cb?: (search: string) => void
}