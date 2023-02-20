import { apiInstance } from "@/API";
import * as CONSOLE from "@/utils/console";
/**
 * Access the main endpoint with queryKey[0]
 * or if you put the custom ID then access it with queryKey[1]
 *
 * You can add as many endpoint as possible just access it with
 * its relatable index
 *
 * @param {Array(string)} queryKey
 */

export const karyawanMainDataGet = async (endpoint) => {
  try {
    const res = await apiInstance.get(endpoint);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(CONSOLE.errorApiRes);
    }
  } catch (err) {
    throw new Error(CONSOLE.errorMsg404);
  }
};

export const karyawanSingleDataGet = async (endpoint, ID) => {
  const singleDataEndpoint = `${endpoint}/${ID}`;

  try {
    const res = await apiInstance.get(singleDataEndpoint);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(CONSOLE.errorApiRes);
    }
  } catch (err) {
    throw new Error(CONSOLE.errorMsg404);
  }
};

export const karyawanDataPost = async (endpoint, payload) => {
  return await apiInstance.post(endpoint, payload);
};
