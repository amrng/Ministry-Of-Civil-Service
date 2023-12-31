export interface LoginSchema {
  email: string;
  password: string;
}

export interface CreateNewNews {
  title: string;
  description: string;
  media?: FileList | null;
}

export interface ShowNews {
  _id: string;
  video_url: string[];
  title: string;
  img_url: string[];
}