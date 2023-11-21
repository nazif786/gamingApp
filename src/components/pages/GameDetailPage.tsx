import { useParams } from "react-router-dom";
import useGam from "../../hooks/useGam";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandalbeText from "../ExpandalbeText";
import GameAttributes from "../GameAttributes";
import GameTrailer from "../GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGam(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  // console.log(game);(error) return <Text>{error.message} </Text>
  return (
    <>
      <Heading>{game.name} </Heading>
      <ExpandalbeText>{game.description_raw}</ExpandalbeText>
      <GameAttributes game={game} />
      <GameTrailer id={game.id} />
    </>
  );
};

export default GameDetailPage;
