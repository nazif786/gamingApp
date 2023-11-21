import genres from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
// const useGenres = () => ({ data: genre, isLaoding: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // () => apiClient.get("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    // initialData: { count: genres.length, results: genres, next: null },
    initialData: genres,
  });
export default useGenres;

// second part starts from here
