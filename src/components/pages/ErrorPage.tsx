import { Text, Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      {" "}
      <NavBar />
      <Box padding={10}>
        <Heading> Oops</Heading>
        {/* <p>Invalid Page: this page doesn't exist </p> */}
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "This Page doesn't Exit"
            : "somting went wrong"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
