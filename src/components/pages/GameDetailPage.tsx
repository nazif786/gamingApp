import { useParams } from "react-router-dom";
import useGam from "../../hooks/useGam";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandalbeText from "../ExpandalbeText";
import DefinitionItem from "../DefinitionItem";

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
      <SimpleGrid columns={2}>
        <DefinitionItem term={game.name}>
          {/* {game.map((platfrom) => game.)} */}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
