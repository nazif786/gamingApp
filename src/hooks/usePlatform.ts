// import useData from "./useData";
// import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import platforms from "../data/platforms";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}
// 1. gettin data using react- useEffect and react useState
// const usePlatfrom = () => useData<Platforms>("/platforms/lists/parents");
// 2. fetching dta using static file ../data/platfroms
// const usePlatfrom = () => ({ data: platforms, isLoading: false, error: null });
// 3. fetching data using React-Query
const usePlatfrom = () =>
  useQuery<FetchResponse<Platforms>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatfrom;
