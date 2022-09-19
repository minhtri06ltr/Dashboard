import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  VirtualScroll,
  Page,
  Toolbar,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  DetailRow,
  Grid,
} from "@syncfusion/ej2-react-grids";
import {
  ordersData,
  ordersGrid,
} from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  let grid = new Grid();
  const toolbarClick = (args) => {
    if (args.item.id.includes("pdfexport")) {
      grid.pdfExport({
        fileName: "test.pdf",
        //exportType: "CurrentPage",
        theme: {
          header: {
            bold: true,
            fontColor: "#00ff00",
            fontName: "Calibri",
            fontSize: 10,
          },
          record: {
            fontColor: "#0000ff",
            fontName: "Calibri",
            fontSize: 8,
          },
        },
        header: {
          fromTop: 0,
          height: 130,
          contents: [
            {
              type: "Text",
              value: "Northwind Traders",
              position: { x: 0, y: 50 },
              style: {
                textBrushColor: "#000000",
                fontSize: 13,
              },
            },
          ],
        },
      });
    } else if (
      args.item.id.includes("excelexport")
    ) {
      grid.excelExport({
        fileName: "invoice.xlsx",
        exportType: "CurrentPage",
        theme: {
          header: {
            bold: true,
            fontColor: "#00ff00",
            fontName: "Calibri",
            fontSize: 10,
          },
          record: {
            fontColor: "#0000ff",
            fontName: "Calibri",
            fontSize: 8,
          },
        },
        header: {
          headerRows: 1,
          rows: [
            {
              cells: [
                {
                  colSpan: 4,
                  value: "Northwind Traders",
                  style: {
                    fontColor: "#C67878",
                    fontSize: 20,
                    hAlign: "Center",
                    bold: true,
                  },
                },
              ],
            },
          ],
        },
        footer: {
          footerRows: 1,
          rows: [
            {
              cells: [
                {
                  colSpan: 5,
                  value:
                    "Thank you for your business!",
                  style: {
                    hAlign: "Center",
                    bold: true,
                  },
                },
              ],
            },
          ],
        },
      });
    }
  };
  return (
    <div className="m-2 md:m-10 mt-24 dark:bg-secondary-dark-bg  p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="grid-component"
        ref={(g) => (grid = g)}
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={["PdfExport", "ExcelExport"]}
        allowPdfExport={true}
        allowExcelExport={true}
        width="auto"
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,

            Sort,
            ContextMenu,
            Toolbar,
            Filter,
            Page,
            DetailRow,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
