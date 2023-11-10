import genres from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// const useGenres = () => ({ data: genre, isLaoding: false, error: null });
const useGenres = () => {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: genres.length, results: genres },
  });
};
export default useGenres;

// second part starts from here
