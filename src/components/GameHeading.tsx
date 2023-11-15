import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatf from "../hooks/usePlatf";
import useGenr from "../hooks/useGenr";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenr(gameQuery.genreId);
  const platform = usePlatf(gameQuery.platformId);
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
