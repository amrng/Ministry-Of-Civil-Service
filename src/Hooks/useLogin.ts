import { AxiosRequestConfig } from "axios";
import axiosInstance from "../App/api/axios.config";
import { useQuery } from "@tanstack/react-query";

interface values {
  email: string;
  password: string;
}

interface ILogin {
  queryKey: string[];
  url: string;
  values: values;
  config?: AxiosRequestConfig;
}

const useLogin = ({ queryKey, url, values, config }: ILogin) => {
  return useQuery({
    queryKey,
    queryFn: async () => await axiosInstance.post(url, values, config),
  });
};

export default useLogin;
