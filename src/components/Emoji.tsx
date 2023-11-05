import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.ico";
import thumsUp from "../assets/thumsUp.ico";
import bullsEye from "../assets/bullsEye.ico";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumsUp, alt: "recommented" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return (
    <>
      <Image {...emojiMap[rating]} boxSize="18px" marginTop={1} />
    </>
  );
};

export default Emoji;
