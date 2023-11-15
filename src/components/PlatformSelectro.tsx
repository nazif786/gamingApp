import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfrom, { Platforms } from "../hooks/usePlatform";
interface Props {
  onSelectPlatfrom: (platfrom: Platforms) => void;
  selectedPlatfromId?: number;
}

const PlatformSelectro = ({ onSelectPlatfrom, selectedPlatfromId }: Props) => {
  const { data: platforms } = usePlatfrom();
  const selectedplatform = platforms?.results.find(
    (p) => p.id === selectedPlatfromId,
  );

  const { data: data, error } = usePlatfrom();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedplatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform: Platforms) => (
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
