import { Image, SimpleGrid } from "@chakra-ui/react";
import usePictures from "../entities/usePictures";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}
const GamePictures = ({ gameId }: Props) => {
  const { data, error, isLoading } = usePictures(gameId);

  if (isLoading) return null;
  if (error) throw error;

  if (!data) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data.results.map((pic) => (
        <Image
          key={pic.id}
          src={getCroppedImageUrl(pic.image)}
          alt="screenshot"
        />
      ))}
    </SimpleGrid>
  );
};

export default GamePictures;
