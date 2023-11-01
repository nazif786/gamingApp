import useGams from "../hooks/useGams";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  selectedGenre: string | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLaoding } = useGams(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <h1>Game Grid</h1>
      <br />
      {/* {laoding && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )} */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="10px"
      >
        {isLaoding &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
