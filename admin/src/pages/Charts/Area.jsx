import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { theme } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Area"
        title="Inflation Rate in Percentage"
      />
      <ChartComponent
        id="area-chart"
        background={
          theme.mode === "Dark"
            ? "#33373E"
            : "#fff"
        }
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            DateTime,
            SplineAreaSeries,
            Legend,
          ]}
        />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective
              key={index}
              {...item}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
