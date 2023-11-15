import { Heading } from "@chakra-ui/react";
import useGenr from "../hooks/useGenr";
import usePlatf from "../hooks/usePlatf";
import useGameQueryStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }
const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenr(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatf(platformId);

  const Headings = ` ${platform?.name || ""} 
    ${genre?.name || ""} Games`;

  return (
    <>
      <Heading as="h1" marginY={5}>
        {Headings}
      </Heading>
    </>
  );
};

export default GameHeading;
