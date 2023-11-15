import usePlatfrom from "./usePlatform";

const usePlatf = (id?: number) => {
  const { data: platforms } = usePlatfrom();
  return platforms?.results.find((p) => p.id === id);
};
export default usePlatf;
