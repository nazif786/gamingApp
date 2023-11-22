import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Pictures } from "../hooks/Pictures";

const usePictures = (gameId: number) => {
  const apiClient = new APIClient<Pictures>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default usePictures;
