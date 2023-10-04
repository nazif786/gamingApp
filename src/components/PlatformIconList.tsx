import { Platforms } from "../services/games-service";
import { Text } from "@chakra-ui/react";

interface Props {
  platforms: Platforms[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text> {platform.name} </Text>
      ))}
    </>
  );
};

export default PlatformIconList;
