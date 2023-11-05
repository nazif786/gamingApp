import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfrom from "../hooks/usePlatform";
import { Platform } from "../hooks/useGams";
interface Props {
  onSelectPlatfrom: (platfrom: Platform) => void;
  selectedPlatfrom: Platform | null;
}
const PlatformSelectro = ({ onSelectPlatfrom, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatfrom();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatfrom?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatfrom(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelectro;
