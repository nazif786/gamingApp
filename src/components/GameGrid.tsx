import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    // isFetchingNextPage,
    hasNextPage,
  } = useGams(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  const fetchGamesCount =
    data?.pages.reduce(
      (totalGames, page) => totalGames + page.results.length,
      0,
    ) || 0;
  return (
    <Box padding="10px" mb="50px">
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        }
        dataLength={fetchGamesCount}
      >
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
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
          {/* // Note: this code is useable for react_Query  */}
          {/* {data?.results.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))} */}
        </SimpleGrid>
      </InfiniteScroll>
      {/*  <Button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        margin={3}
      >
        {isFetchingNextPage ? (
          <>
            <Text margin={"5px"}>Loading...</Text>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          </>
        ) : (
          "Load More"
        )} 
      </Button>*/}
      <br />
    </Box>
  );
};

export default GameGrid;
