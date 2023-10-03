import useGams from "../hooks/useGams";
import { Text, Spinner } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error, setError, laoding } = useGams();
  return (
    <>
      <h1>Game Grid</h1>
      <br />
      {laoding && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
