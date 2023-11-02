import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   onSelectPlatfrom: (platfrom: Platform) => void;
//   selectedPlatfrom: Platform | null;
// }

const SortSelector = () => {
  //   const { data, error } = usePlatfrom();
  //   if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevence
        </MenuButton>
        <MenuList>
          <MenuItem>Relevence</MenuItem>
          <MenuItem>Date Added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
