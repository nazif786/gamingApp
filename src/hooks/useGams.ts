// import { Platforms } from "./useGams";
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
// import { Platforms } from "./usePlatform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGams = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        Platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery],
  );

export default useGams;
