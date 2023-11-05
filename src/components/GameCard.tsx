import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGams";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          {/* {game.parent_platforms.map(({ platform }) => (
            <Text> {platform.name} </Text>
          ))} */}
          {/* // or 
          {game.parent_platforms.map((platform)=> platform.platform.name)} */}
          {/* now to pass it to another component "platformIconList we have to create and 
          array of ojects as: " */}
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
