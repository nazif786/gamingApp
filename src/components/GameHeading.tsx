import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatfrom from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatfrom();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId,
  );
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const Headings = ` ${selectedPlatform?.name || ""} 
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
