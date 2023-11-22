import { useParams } from "react-router-dom";
import useGam from "../../hooks/useGam";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandalbeText from "../ExpandalbeText";
import GameAttributes from "../GameAttributes";
import GameTrailer from "../GameTrailer";
import GamePictures from "../GamePictures";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGam(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  // console.log(game);(error) return <Text>{error.message} </Text>
  return (
    <>
      <Heading>{game.name} </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        <Box>
          <ExpandalbeText>{game.description_raw}</ExpandalbeText>
          <GameAttributes game={game} />
        </Box>
        <Box justifySelf="start">
          <GamePictures gameId={game.id} />
        </Box>
      </SimpleGrid>
      <Box marginY={5}>
        <GameTrailer id={game.id} />
      </Box>
    </>
  );
};

export default GameDetailPage;
