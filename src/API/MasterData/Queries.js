import { TEST_API } from "@/API/MasterData/Apis";
import * as FETCHER from "@/API/MasterData/Fetchers";

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
 * @param {string | number} id
 */

export const masterDataQuery = (ID) => {
  const endpoint = TEST_API.PRODUCTS;

  return {
    queryKey: [endpoint],
    queryFn: FETCHER.karyawanMainDataFetch,
  };
};
