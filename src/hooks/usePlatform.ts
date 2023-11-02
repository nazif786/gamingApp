import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatfrom = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatfrom;
