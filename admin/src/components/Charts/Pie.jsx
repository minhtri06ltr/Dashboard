import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { theme } = useStateContext();
  return (
    <AccumulationChartComponent
      titleStyle={{
        color: "white",
      }}
      legendSettings={{
        textStyle: {
          color:
            theme.mode === "Dark" ? "white" : "",
        },
        visible: true,
      }}
      enableSmartLabels={true}
      id="pie-chart"
      background={
        theme.mode === "Dark" ? "#33373E" : "#fff"
      }
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          type="Pie"
          xName="x"
          yName="y"
          dataLabel={{ visible: true }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
