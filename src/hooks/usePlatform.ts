import useData from "./useData";

export interface PlatformsSelector {
  id: number;
  name: string;
  slug: string;
}

const usePlatfrom = () =>
  useData<PlatformsSelector>("/platforms/lists/parents");

export default usePlatfrom;
