import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { PrimeIcons } from "primereact/api";

export default function MultiAxisDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["10:00", "12:00", "14:00", "16:00", "18:05"],
      datasets: [
        {
          label: "Bist100",
          fill: true,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y",
          tension: 0.4,
          data: [9.4, 9.2, 9.132, 9.0, 9.078],
        },
        // {
        //     label: 'Altin',
        //     fill: false,
        //     borderColor: documentStyle.getPropertyValue('--yellow-500'),
        //     yAxisID: 'y1',
        //     tension: 0.4,
        //     data: [28, 48, 40, 19, 86, 27, 90]
        // }
      ],
    };
    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const degerler = [
    {
      position: 0,
      bist100: "9.131,82",
      fark: "-23,50",
      degisim: "-0,26 %",
    },
  ];
  
  const getPositionClassName = (position) => {
    return position === 0
      ? "pi pi-angle-down text-red-500 text-2xl"
      : "pi pi-angle-up text-green-500 text-2xl";
  };
  
  const getColumnClassName = (position) => {
    return position === 0 ? "text-red-500" : "text-green-500";
  };
  
  return (
    <div className="">
      <div className="">
        <DataTable value={degerler} tableStyle={{ minWidth: "10rem" }}>
          <Column
            header="BIST 100"
            body={(rowData) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className={getPositionClassName(rowData.position)}
                  style={{ marginRight: "5px" }}
                ></i>
                <span className={getColumnClassName(rowData.position) + " text-2xl"}>{rowData.bist100}</span>
              </div>
            )}
          ></Column>
          <Column
            field="fark"
            header="Fark"
            body={(rowData) => (
              <span className={getColumnClassName(rowData.position)}>{rowData.fark}</span>
            )}
          ></Column>
          <Column
            field="degisim"
            header="Değişim"
            body={(rowData) => (
              <span className={getColumnClassName(rowData.position)}>{rowData.degisim}</span>
            )}
          ></Column>
        </DataTable>
      </div>
  
      <div className="card">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
