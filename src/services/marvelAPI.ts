/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import md5 from 'md5';

type Resource = 'heroes' | 'comics';

const createMarvelAuth = (): string => {
  // TODO: check why env messed up
  // const { VUE_APP_PUBLICKEY } = process.env;
  // const { VUE_APP_PRIVATEKEY } = process.env;
  const publicKey = 'c1cd74947d09f3787a22c4b90e0b6810';
  const privateKey = '87fd653a693e75a1d714d127e982739095978052';
  const timestamp = Number(new Date());
  const stringToHash = timestamp + privateKey + publicKey;
  const hash = md5(stringToHash);
  const authMarvel = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  return authMarvel;
};

class ResourceAPI {
  public static authMarvel = createMarvelAuth();

  public static async fetchAll(resource: Resource): Promise<any> {
    return axios.get(`${process.env.VUE_APP_APIURL}/${resource}?${this.authMarvel}`);
  }

  public static async fetchByKey(resource: Resource, key: string, value: string): Promise<unknown> {
    return axios.get(
      `${process.env.VUE_APP_APIURL}/${resource}?${key}=${value}&apikey=${process.env.API_KEY}`,
    );
  }
}

export default ResourceAPI;
