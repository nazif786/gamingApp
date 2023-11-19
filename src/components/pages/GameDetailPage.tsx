import { useParams } from "react-router-dom";
import useGam from "../../hooks/useGam";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandalbeText from "../ExpandalbeText";

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
      <ExpandalbeText>{game.description_raw}</ExpandalbeText>
    </>
  );
};

export default GameDetailPage;
