import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandalbeText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text> {children} </Text>;

  const summury = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summury}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={3}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandalbeText;
