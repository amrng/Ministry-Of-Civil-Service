import { getCookie } from "../cookies";
import axiosInstance from "./axios.config";

export async function showNews() {
  const { data } = await axiosInstance.get("post/all?lang=en&page=1&limit=10");
  console.log(data);

  return data;
}

export async function createPost(values: FormData) {
  const response = await axiosInstance.post("post", values, {
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
      authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
    },
  });
  console.log(response);
  return response;
}

export async function deletePost(id: string) {
  const response = await axiosInstance.delete(`post/${id}`, {
    headers: {
      authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
    },
  });
  console.log(response);
  return response;
}

export async function editPost(postId: string, values: FormData) {
  const response = await axiosInstance.patch(`post/${postId}`, values, {
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
      authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
    },
  });
  console.log(response);
  return response;
}

export async function deletePostMedia(postId: string, mediaName: string) {
  const response = await axiosInstance.patch(
    `post/${postId}/delete-media`,
    { mediaName },
    {
      headers: {
        authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
      },
    }
  );
  console.log(response);
  return response;
}
