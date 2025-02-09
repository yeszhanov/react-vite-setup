import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "@/store/auth/authSlice"; // import the actions

import { Button, HStack, Box, Text } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState([1, 2, 3]);
  const counts = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Box color="red">
          <Text fontFamily="body">
            {counts}This is a custom theme component!
          </Text>
        </Box>

        <HStack>
          <Button>base</Button>
          <Button onClick={() => dispatch(incrementAsync(10))} visual="solid">
            solid
          </Button>
          <Button onClick={() => dispatch(decrement())} visual="outline">
            outline
          </Button>
        </HStack>
      </div>
    </>
  );
}

export default App;
