import React from "react";
import CardComponent from "./Components/CardComponent/CardComponent";
import datas from "./utils/datas.js";

const App = () => {
  return (
    <div>
      <CardComponent datas={datas} />
    </div>
  );
};

export default App;
