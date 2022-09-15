import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Highlight,
  DataLabel,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import {
  colorMappingData,
  ColorMappingPrimaryYAxis,
  ColorMappingPrimaryXAxis,
  rangeColorMapping,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMappingData = () => {
  const { theme } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Color Mapping Data"
        title="Inflation Rate in Percentage"
      />
      <ChartComponent
        highlightMode="Point"
        highlightPattern="DiagonalForward"
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
          toggleVisibility: false,
          mode: "Range",
        }}
        id="colorMapping-chart"
        background={
          theme.mode === "Dark"
            ? "#33373E"
            : "#fff"
        }
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            ColumnSeries,
            Highlight,
            DataLabel,
            Tooltip,
            Category,
            Legend,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            marker={{
              dataLabel: {
                visible: true,
                position: "Outer",
              },
            }}
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map(
            (item, index) => (
              <RangeColorSettingDirective
                key={index}
                label={item.label}
                start={item.start}
                end={item.end}
                colors={item.colors}
              ></RangeColorSettingDirective>
            ),
          )}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMappingData;
