import { TEST_API } from "@/API/Karyawan/Apis";
import * as FETCHER from "@/API/Karyawan/Fetchers";

/**
 * You can provide custom ID for fetching individual
 * item via this query param and put it
 * after the main endpoint in the queryKey array
 *
 * Place endpoint inside queryKey and access it
 * in the fetcher param
 *
 * See the Fetchers.js for more detail
 *
 * NOTE: queryKey is just for unique identifier but also can be used as payload
 * but I wouldn't recommend because it's not convenient
 *
 * @param {string | number} id
 */

export const karyawanMainQuery = () => {
  const endpoint = TEST_API.POKEMON;

  return {
    queryKey: [endpoint],
    queryFn: () => FETCHER.karyawanMainDataGet(endpoint),
    onSuccess: (data) => {
      // Trigger zustand set state here later
      console.log(data);
    },
  };
};

export const karyawanSingleQuery = (ID) => {
  const endpoint = TEST_API.POKEMON;
  const dataId = ID; // Id for single data fetch

  return {
    queryKey: [endpoint, dataId],
    queryFn: () => FETCHER.karyawanSingleDataGet(endpoint, dataId),
    onSuccess: (data) => {
      // Trigger zustand set state here later
      console.log(data);
    },
  };
};
