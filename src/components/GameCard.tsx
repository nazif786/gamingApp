import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../services/games-service";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          {/* {game.parent_platforms.map(({ platform }) => (
            <Text> {platform.name} </Text>
          ))} */}
          {/* // or 
          {game.parent_platforms.map((platform)=> platform.platform.name)} */}
          {/* now to pass it to another component "platformIconList we have to create and 
          array of ojects as: " */}
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
