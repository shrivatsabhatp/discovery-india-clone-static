import "./template/Template.scss";
import { IconContext } from "react-icons";
import Template from "./template/Template";
import Carousal from "./organisms/Carousal";
import Rail from "./organisms/Rail";
import DetailRail from "./organisms/DetailRail";
import { carousal, genre_rail, rail_1, rail_2 } from "./assets/data";

function App() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Template>
        <Carousal data={carousal} />
        <Rail data={genre_rail} />
        <DetailRail data={rail_1} />
        <DetailRail data={rail_2} portrait heading={"Stream For Free Now"} />
      </Template>
    </IconContext.Provider>
  );
}

export default App;
