import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

type data = {
  max: string;
};

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: data;
}

const apiClient = new APIClient<Trailer>("/games");

const useGameTrailer = (id: number) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: () => apiClient.GetTrailer(id),
  });
export default useGameTrailer;
