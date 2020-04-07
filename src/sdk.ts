import axios, { AxiosResponse } from "axios";

export class SDK {
  basepath = "https://www.hpb.health.gov.lk/api/get-current-statistical";

  async getInitData() {
    const result: AxiosResponse<any> = await axios.get(this.basepath);
    return result;
  }
}
