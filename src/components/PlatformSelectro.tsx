import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfrom from "../hooks/usePlatform";
import { Platforms } from "../entities/Platforms";
import usePlatf from "../hooks/usePlatf";
import useGameQueryStore from "../store";
// interface Props {
//   onSelectPlatfrom: (platfrom: Platforms) => void;
//   selectedPlatfromId?: number;
// }

const PlatformSelectro = () => {
  const { data: data, error } = usePlatfrom();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatfromId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedplatform = usePlatf(selectedPlatfromId);

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
              onClick={() => setSelectedPlatformId(platform.id)}
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
