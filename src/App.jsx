import { useState } from "react";

import "@/Appcss";
import { Button, HStack, Box, Text } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState([1, 2, 3]);

  return (
    <>
      <div>
        <Box color="red">
          <Text fontFamily="body">This is a custom theme component!</Text>
        </Box>

        <HStack>
          <Button>base</Button>
          <Button visual="solid">solid</Button>
          <Button visual="outline">outline</Button>
        </HStack>
      </div>
    </>
  );
}

export default App;
