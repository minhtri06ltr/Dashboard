import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Tooltip,
  Category,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { theme } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Bar"
        title="Inflation Rate in Percentage"
      />
      <ChartComponent
        title="Olympic Medal Counts - RIO"
        id="bar-chart"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        background={
          theme.mode === "Dark"
            ? "#33373E"
            : "#fff"
        }
        height="420px"
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            ColumnSeries,
            Legend,
            Tooltip,
            Category,
            DataLabel,
          ]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
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

export default Bar;
