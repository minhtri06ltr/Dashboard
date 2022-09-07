import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({
  width,
  height,
  color,
  bgColor,
}) => {
  return (
    <ChartComponent
      id="stack-chart"
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      legendSettings={{ background: "white" }}
    >
      <Inject
        services={[
          Legend,
          Category,
          StackingColumnSeries,
          Tooltip,
        ]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map(
          (item, index) => (
            <SeriesDirective
              key={index}
              {...item}
            />
          ),
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
