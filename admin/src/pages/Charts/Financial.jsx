import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Crosshair,
  DateTime,
  HiloSeries,
  Tooltip,
  Zoom,
  Logarithmic,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Financial = () => {
  const { theme } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Financial"
        title="Inflation Rate in Percentage"
      />
      <ChartComponent
        titleStyle={{
          color: "white",
        }}
        legendSettings={{
          textStyle: {
            color:
              theme.mode === "Dark"
                ? "white"
                : "",
          },
          visible: true,
        }}
        id="financial-chart"
        background={
          theme.mode === "Dark"
            ? "#33373E"
            : "#fff"
        }
        crosshair={{
          enable: true,
          lineType: "Vertical",
          line: { width: 0 },
        }}
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        tooltip={{ enable: true, shared: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            DateTime,
            Crosshair,
            Legend,
            HiloSeries,
            Tooltip,
            Logarithmic,
            Zoom,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            type="Hilo"
            xName="x"
            yName="low"
            high="high"
            low="low"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
