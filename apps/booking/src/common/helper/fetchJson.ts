import Axios from "../helper/apiInstance";

export default async function fetcher<JSON = unknown>(
  path: string
): Promise<JSON> {
  const response = await Axios.get(path);
  const data = await response.data;

  if (response.statusText === "OK") {
    return data;
  }

  throw new Error(response.statusText);
}
