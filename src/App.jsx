import "./template/Template.scss";
import { IconContext } from "react-icons";
import Home from "./pages/Home";

function App() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Home />
    </IconContext.Provider>
  );
}

export default App;
