export interface LoginSchema {
  email: string;
  password: string;
}

export interface CreateNewNews {
  title: string;
  description: string;
  media?: FileList | null | string[];
}

export interface ShowNewsList {
  _id: string;
  video_url: string[];
  title: string;
  img_url: string[];
  description: string;
}

export interface PostData {
  addedBy?: string;
  createdAt?: string;
  description: string;
  img_url?: string[];
  title: string;
  updatedAt?: string;
  video_url?: string[];
  _id: string;
}
