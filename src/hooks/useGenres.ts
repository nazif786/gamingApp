import { useEffect, useState } from "react";
import gamesService from "../services/games-service";
import apiClient, { CanceledError } from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        // eslint-disable
        setGenres(res.data.results);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, laoding };
};

export default useGenres;
