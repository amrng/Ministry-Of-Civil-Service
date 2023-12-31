import { AxiosRequestConfig } from "axios";
import axiosInstance from "../../App/api/axios.config";
import { useQuery } from "@tanstack/react-query";

interface IQuery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}

const useShowNews = ({ queryKey, url, config }: IQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url, config);

      return data;
    },
  });
};

export default useShowNews;
