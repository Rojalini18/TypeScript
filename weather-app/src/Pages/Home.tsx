import React, { useState } from "react";
import { Box, Button, Input, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  var handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`/country/${country}`);
  };
  return (
    <div>
      <Center marginTop="150px">
        <Box w="550px" h="250px" bg="teal" border="3px solid black">
          <Center
            fontSize="30px"
            fontWeight="bold"
            color="white"
            marginTop="10px"
          >
            Weather App!
          </Center>
          <br />
          <Center>
            <form onSubmit={(event) => handleSubmit(event)}>
              <Center w="200px">
                <Input
                  data-testid="inputField"
                  variant="primary"
                  placeholder="Search for a country"
                  onChange={(event) => setCountry(event.target.value)}
                />
              </Center>
              <br />
              <Center>
                <Button
                  data-testid="submitButton"
                  colorScheme="yellow"
                  variant="solid"
                  type="submit"
                  disabled={country === ""}
                >
                  Submit
                </Button>
              </Center>
            </form>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Home;
