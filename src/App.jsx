import { useState } from "react";
import "./App.scss";
import Search from "./components/Search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
    </>
  );
}

export default App;
