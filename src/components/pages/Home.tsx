import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../GenreList";
import GameHeading from "../GameHeading";
import PlatformSelectro from "../PlatformSelectro";
import SortSelector from "../SortSelector";
import GameGrid from "../GameGrid";

const Home = () => {
  return (
    <>
      <Grid
        className="grid"
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // lg is > 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/* <GridItem area="nav">
          <NavBar /> */}
        {/* onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            } */}
        {/* </GridItem> */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />

            {/*  selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
               setGameQuery({ ...gameQuery, genreId: genre.id })
              } */}
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding={2}>
            <GameHeading /> {/* gameQuery={gameQuery} */}
            <HStack spacing={5} marginBottom={0}>
              <PlatformSelectro />
              {/* selectedPlatfromId={gameQuery.platformId}
                onSelectPlatfrom={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                } */}
              <SortSelector />
              {/* sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                } */}
            </HStack>
          </Box>
          <GameGrid /> {/*gameQuery={gameQuery} */}
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
