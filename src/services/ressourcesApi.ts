import axios, { AxiosRequestConfig, AxiosStatic } from "axios";
import md5 from "md5";

type Resource = "heroes";

interface Heroe {
  id: string;
  name: string;
}

const URLMARVELAPI = () => {
  const PUBLIC_KEY = process.env.PUBLIC_KEY;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const BASE_URL = process.env.API_URL;
  const timestamp = Number(new Date());
  const stringToHash = PRIVATE_KEY ? timestamp + PRIVATE_KEY + PUBLIC_KEY : "";
  const hash = md5(stringToHash);
  const url =
    BASE_URL + "&ts=" + timestamp + "&apikey=" + PUBLIC_KEY + "&hash=" + hash;

  return url;
};

class ResourceAPI {
  public static axiosInstance: AxiosStatic = axios;

  public static authMarvel = URLMARVELAPI();

  public static async fetchAll(resource: Resource) {
    return this.axiosInstance.get(
      `${ResourceAPI.authMarvel}/${resource}?apikey=${process.env.API_KEY}`
    );
  }

  public static async fetchByKey(
    resource: Resource,
    key: string,
    value: string
  ) {
    return this.axiosInstance.get(
      `${process.env.API_URL}/${resource}?${key}=${value}&apikey=${process.env.API_KEY}`
    );
  }
}

export default ResourceAPI;
