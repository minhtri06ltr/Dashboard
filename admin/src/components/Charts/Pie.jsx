import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = ({
  id,
  data,
  height,
  legendVisibility,
}) => {
  const { theme } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{
        visible: legendVisibility,
        background: "white",
      }}
      height={height}
      background={
        theme.mode === "Dark" ? "#33373E" : "#fff"
      }
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%" // inner pie circle
          startAngle={0} //start pie
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="30%" // slice pie
          explodeIndex={2} // slice pie position
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
