import { AspectRatio } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";
// import { Text } from "@chakra-ui/react";
interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailer(id);
  console.log(data?.results[0].data.max);
  if (error) throw error;

  return (
    <>
      {/* <video>
        // <source src={data?.results[0].data.max} />
        //{" "}
      </video> */}
      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="tailer"
          src={data?.results[0].data.max}
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
};

export default GameTrailer;
