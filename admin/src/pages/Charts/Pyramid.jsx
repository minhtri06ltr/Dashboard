import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccPoints,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  IAccResizeEventArgs,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { theme } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Pyramid"
        title="Inflation Rate in Percentage"
      />
      <AccumulationChartComponent
        titleStyle={{
          color: "white",
        }}
        legendSettings={{
          visible: false,
        }}
        id="pyramid-chart"
        background={
          theme.mode === "Dark"
            ? "#33373E"
            : "#fff"
        }
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            AccumulationDataLabel,
            AccumulationTooltip,
            PyramidSeries,
            AccumulationLegend,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            explode={true}
            xName="x"
            yName="y"
            type="Pyramid"
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
