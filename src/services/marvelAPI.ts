import axios, { AxiosStatic } from 'axios';
import md5 from 'md5';

type Resource = 'heroes' | 'comics';

interface Heroe {
  id: string;
  name: string;
}

const URLMARVELAPI = () => {
  const { PUBLIC_KEY } = process.env;
  const { PRIVATE_KEY } = process.env;
  //   const BASE_URL = process.env.API_URL;
  const timestamp = Number(new Date());
  const stringToHash = PRIVATE_KEY ? timestamp + PRIVATE_KEY + PUBLIC_KEY : '';
  const hash = md5(stringToHash);
  const authMarvel = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  return authMarvel;
};

class ResourceAPI {
  public static axiosInstance: AxiosStatic = axios;

  public static authMarvel = URLMARVELAPI();

  public static async fetchAll(resource: Resource): Promise<unknown> {
    return this.axiosInstance.get(
      `${process.env.API_URL}/${resource}?${await URLMARVELAPI()}`,
    );
  }

  public static async fetchByKey(
    resource: Resource,
    key: string,
    value: string,
  ): Promise<unknown> {
    return this.axiosInstance.get(
      `${process.env.API_URL}/${resource}?${key}=${value}&apikey=${process.env.API_KEY}`,
    );
  }
}

export default ResourceAPI;
