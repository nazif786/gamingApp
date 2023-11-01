import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfrom, { PlatformsSelector } from "../hooks/usePlatform";
interface Props {
  onSelectPlatfrom: (platfrom: PlatformsSelector) => void;
}
const PlatformSelectro = ({ onSelectPlatfrom }: Props) => {
  const { data, error } = usePlatfrom();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platfrom
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <Link key={platform.id} onClick={() => onSelectPlatfrom(platform)}>
              <MenuItem>{platform.name}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelectro;
