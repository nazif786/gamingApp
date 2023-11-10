import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => ({ data: genre, isLaoding: false, error: null });
export default useGenres;

// second part starts from here
