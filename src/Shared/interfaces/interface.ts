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
