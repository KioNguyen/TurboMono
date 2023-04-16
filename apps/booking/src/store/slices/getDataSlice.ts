import Axios from "./../../common/helper/apiInstance";
import { GetDataState } from "./../../types";
import { StateCreator } from "zustand";

export const createGetDataSlice: StateCreator<
  GetDataState,
  [],
  [],
  GetDataState
> = () => ({
  getData: async (path: string) => {
    const response = await Axios(path);
    return response;
  },
});
