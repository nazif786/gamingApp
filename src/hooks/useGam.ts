import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
  slug: string;
  original_name: string;
  description_raw: string;
  released: string;
}
const apiClint = new APIClient<Game>("/games");

const useGam = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClint.Get(slug),
  });

export default useGam;
