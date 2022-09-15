import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { theme } = useStateContext();
  return (
    <ChartComponent
      titleStyle={{
        color: "white",
      }}
      legendSettings={{
        textStyle: {
          color:
            theme.mode === "Dark" ? "white" : "",
        },
      }}
      id="line-chart"
      background={
        theme.mode === "Dark" ? "#33373E" : "#fff"
      }
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
    >
      <Inject
        services={[
          LineSeries,
          DateTime,
          Legend,
          Tooltip,
        ]}
      />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
