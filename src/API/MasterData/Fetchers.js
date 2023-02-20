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

export const masterDataFetch = async ({ queryKey }) => {
  const firstEndpoint = queryKey[0];
  // const secondEndpoint = queryKey[1]

  try {
    const res = await apiInstance.get(firstEndpoint);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(CONSOLE.errorApiRes);
    }
  } catch (err) {
    throw new Error(CONSOLE.errorMsg404);
  }
};
