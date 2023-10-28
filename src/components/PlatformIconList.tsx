import { Platforms } from "../services/games-service";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

// index signature: [key, string] it represents a key or property of this object
// like here we have pc, mac etc...by using thge index signature we don't have to specify
// the name of these keys. if {key, string} defines it's type, when wraped in [] we are defining
// an index signature, so it simply says this object has any numaber of keys of type string.
// and each key is mapped to the value of IconType which is defined in react-icon library.
//  with that the error is gone.
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  android: FaAndroid,
  xbox: FaXbox,
  linux: FaLinux,
  playstation: FaPlaystation,
  mac: FaApple,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};
interface Props {
  platforms: Platforms[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
