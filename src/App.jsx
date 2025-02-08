import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import { Button, HStack,Box,Text } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState([1, 2, 3]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Box bg="primary" p={4} color="red">
      <Text fontFamily="body">This is a custom theme component!</Text>
    </Box>

     <HStack>

<Button color="primary">Click me</Button>
<Button>Click me  </Button>
</HStack>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
