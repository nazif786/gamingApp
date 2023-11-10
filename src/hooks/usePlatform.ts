// import useData from "./useData";
import platforms from "../data/platforms";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}
// 1. gettin data using react- useEffect and react useState
// const usePlatfrom = () => useData<Platforms>("/platforms/lists/parents");
// 2. fetching dta using static file ../data/platfroms
// const usePlatfrom = () => ({ data: platforms, isLoading: false, error: null });
// 3. fetching data using React-Query
const usePlatfrom = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatfrom;
