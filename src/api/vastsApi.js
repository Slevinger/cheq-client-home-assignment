import axios from "axios";
import { vastServiceUrl } from "../const/config";

const instance = axios.create({
  baseURL: vastServiceUrl
});

export const callGetVastsApi = async () => {
  const {
    data: { vasts }
  } = await instance.get("/fetch_vasts");
  return vasts.reduce((acc, vast) => ({ ...acc, [vast.id]: vast }), {});
};

export const getVastApiCall = async id => {
  const vast = await instance.get(`?id=${id}`);
  return vast;
};

export const callCreateVastApi = async (position, width, height, vastUrl) => {
  const { data } = await instance.post("/create_vast", {
    position,
    height,
    width,
    vastUrl
  });
  return data;
};
export const callUpdateVastApi = async ({
  vastId,
  position,
  width,
  height,
  vastUrl
}) => {
  const { data } = await instance.post("/edit_vast", {
    vastId,
    position,
    height,
    width,
    vastUrl
  });
  return data;
};

export const callRemoveVastApi = async id => {
  const { data } = await instance.delete(`?id=${id}`);
  return data;
};

export const callGetVastXmlApi = async id => {
  debugger;
  const { data } = await instance.get(`?id=${id}`);
  return data;
};

export default instance;
