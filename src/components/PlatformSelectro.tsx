import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfrom, { Platforms } from "../hooks/usePlatform";
interface Props {
  onSelectPlatfrom: (platfrom: Platforms) => void;
  selectedPlatfrom: Platforms | null;
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
          {data.results.map((platform) => (
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
