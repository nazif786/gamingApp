import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGams from "../hooks/useGams";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGams(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        // <li key={game.id}>{game.name}</li>
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
