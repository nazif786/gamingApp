import { Text, Heading } from "@chakra-ui/react";

interface Props {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <>
      <Heading as="dt">{term}</Heading>
      <Text as="dd">{children}</Text>
    </>
  );
};

export default DefinitionItem;
