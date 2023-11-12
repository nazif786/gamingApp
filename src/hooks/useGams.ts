// import { Platforms } from "./useGams";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platforms } from "./usePlatform";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}

const useGams = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          // _start: (pageParam - 1) * gameQuery.pageSize,
          // _limit: gameQuery.pageSize,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, AllPges) => {
      return lastPage.next ? AllPges.length + 1 : undefined;
    },
  });
// all commented by farward slashed +++++ frist uncomment the Notes line below
// fetching data using gameQuery hook with seperation of cencer and parameters passing to it.
// useQuery<FetchResponse<Game>, Error>({
//   queryKey: ["games", gameQuery],
//   queryFn: () =>
//     apiClient.getAll({
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     }),
//     staleTime: 3 * 68 * 1000, // 3 minutes
/* using apiClient with no seperation of cencerns 
    () =>
    apiClient
      .get("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data),
    */
// });  NOTE: ++++++++   uncomment this line first for reat-Query with separaton of cencerns  ++++++++++

// fetching data using react-useEffect() function
/* useData<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      Platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  },
  [gameQuery],
); */

export default useGams;
