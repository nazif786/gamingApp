import { useParams } from "react-router-dom";
import useGam from "../../hooks/useGam";
import { Text, Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGam(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  // if (error || "") return error;
  // if (error) return <Text>{error.message} </Text>
  return (
    <>
      <Heading>{game.name} </Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
