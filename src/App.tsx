import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelectro from "./components/PlatformSelectro";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

// build the app with no erros

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="app">
      <Grid
        className="grid"
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // lg is > 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
          {/* onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            } */}
        </GridItem>
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
    </div>
  );
}

export default App;
