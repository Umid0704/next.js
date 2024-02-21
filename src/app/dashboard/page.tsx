import React from "react";
import Card from "./ui/card/Card";
import Trasactions from "./ui/trasactions/Trasactions";
import Chart from "./ui/chart/Chart";
import RightBar from "./ui/rightBar/RightBar";

export default function Dashboard() {
  return (
    <div className="flex gap-[20px]">
      <div className="flex-[3_3_0%] flex flex-col gao-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Trasactions/>
        <Chart/>
      </div>
        <div className=" flex-1">
          <RightBar/>
        </div>
    </div>
  );
}
