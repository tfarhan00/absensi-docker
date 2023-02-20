import * as FETCHER from "@/API/Karyawan/Fetchers";
import { TEST_API } from "@/API/Karyawan/Apis";

export const karyawanPostDataMutate = () => {
  const endpoint = TEST_API.POKEMON;
  return {
    mutationKey: [endpoint],
    mutationFn: (payload) => FETCHER.karyawanDataPost(endpoint, payload),
    onSuccess: (data) => {
      // trigger zustand set state here later
      console.log(data);
    },
  };
};
