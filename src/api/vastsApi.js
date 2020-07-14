import axios from "axios";
import { url } from "../const/config";

const instance = axios.create({
  baseURL: url
});

export const getVastsApiCall = async () => {
  const {
    data: { vasts }
  } = await instance.get("/fetch_vasts");
  return vasts.reduce((acc, vast) => ({ ...acc, [vast.id]: vast }), {});
};

export const getVastApiCall = async id => {
  const vast = await instance.get(`?id=${id}`);
  return vast;
};

export const createVastApiCall = async (position, width, height, vastUrl) => {
  const vast = await instance.post("/create_vast", {
    position,
    height,
    width,
    vastUrl
  });
  return vast;
};
export const updateVastApiCall = async ({
  vastId,
  position,
  width,
  height,
  vastUrl
}) => {
  const patched = await instance.post("/edit_vast", {
    vastId,
    position,
    height,
    width,
    vastUrl
  });
  return patched;
};

export const removeVastApiCall = async id => {
  const { data } = await instance.delete(`?id=${id}`);
  return data;
};

export const getVastXmlApiCall = async id => {
  const { data: xml } = await instance.get(`?id=${id}`);

  return xml;
};

export default instance;
