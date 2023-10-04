import { useEffect, useState } from "react";
import gamesService, {
  FetchGamesResponse,
  Game,
} from "../services/games-service";
import { CanceledError } from "../services/api-client";

const useGams = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gamesService.getAll<FetchGamesResponse>();
    request
      .then((res) => {
        // eslint-disable
        setGames(res.data.results);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  return { games, error, setGames, setError, laoding };
};

export default useGams;
