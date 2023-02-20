import axios from "axios";
import * as CONSTANT from "@/lib/Constants";

/**
 * API instance config
 */

export const apiInstance = axios.create({
  timeout: 10000,
  baseURL: CONSTANT.BASE_URL,
});
