import "./template/Template.scss";
import { IconContext } from "react-icons";
import Home from "./pages/Home";
import Carousel from "./organisms/Sample";

function App() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      {/* <Home /> */}
      <Carousel />
    </IconContext.Provider>
  );
}

export default App;
