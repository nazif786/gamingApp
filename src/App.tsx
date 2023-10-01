import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Grid
        className="grid"
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // lg is > 1024px
        }}
      >
        <GridItem area="nav" bg={""}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"gray"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"darkblue"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
