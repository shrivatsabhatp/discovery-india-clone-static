import React from "react";
import Template from "../template/Template";
import Carousal from "../organisms/Carousal";
import Rail from "../organisms/Rail";
import DetailRail from "../organisms/DetailRail";
import { carousal, genre_rail, rail_1, rail_2 } from "../assets/data";

const Home = () => {
  return (
    <Template>
      <Carousal data={carousal} />
      <Rail data={genre_rail} />
      <DetailRail data={rail_1} />
      <DetailRail data={rail_2} portrait heading={"Stream For Free Now"} />
      <DetailRail data={rail_1} detail heading={"Free Now"} />
    </Template>
  );
};

export default Home;
