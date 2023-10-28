import useGams from "../hooks/useGams";
import { Text, Spinner, SimpleGrid, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, laoding } = useGams();
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
        spacing={10}
        padding="10px"
      >
        {laoding &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
