import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClint = new APIClient<Game>("/games");

const useGam = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClint.Get(slug),
  });

export default useGam;
