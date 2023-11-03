import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const Heading = ` ${gameQuery.platform?.name || ""} 
    ${gameQuery.genre?.name || ""} Games`;

  return (
    <>
      <Heading as="h1" marginY={5}>
        {Heading}
      </Heading>
    </>
  );
};

export default GameHeading;
