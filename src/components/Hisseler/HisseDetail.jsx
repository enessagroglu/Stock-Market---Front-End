import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import guncelVeri from "../../data/guncelHisseVerileri.json";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { createChart } from "lightweight-charts";

function HisseDetail() {
  const { bultenAdi } = useParams();
  const [stockDetails, setStockDetails] = useState(null);
  const navigate = useNavigate();
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const stock = guncelVeri.find((item) => item.bultenAdi === bultenAdi);
    setStockDetails(stock);
  }, [bultenAdi]);

  useEffect(() => {
    if (stockDetails && chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: { type: "solid", color: "white" },
        },
      };
      const chart = createChart(chartContainerRef.current, chartOptions);
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      const data = [
        { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
        { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
        { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
        { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
        { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
        { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
        { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
        { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
        { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
        { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
      ];

      candlestickSeries.setData(data);

      chart.timeScale().fitContent();
    }
  }, [stockDetails]);

  if (!stockDetails) {
    return <div>Loading...</div>;
  }

  const onNavClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-7 card flex justify-content-center flex-wrap w-full mb-4">
      
      <Card title={stockDetails.bultenAdi} className="w-5 text text-blue-700 shadow-6">
      <div ref={chartContainerRef} id="container" style={{ height: "300px" }} className="mt-3" />
        <div className="flex justify-content-around">
          <div className="mt-5 md:flex-order-1 w-6">
            <div className=" flex">
              <p className="mr-2 text-blue-800 font-bold">İşlem Kodu:</p>
              <p> {stockDetails.islemKodu}</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">Pazar Adı:</p>
              <p> {stockDetails.pazarAdi}</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">Sektor Adı:</p>
              <p> {stockDetails.sektorAdi}</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">Pazar Kodu:</p>
              <p> "{stockDetails.pazarKodu}"</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">İşlem Kodu:</p>
              <p> {stockDetails.islemKodu}</p>
            </div>
          </div>

          <div className=" mt-5 md:flex-order-3 w-5">
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">En Düşük Fiyat:</p>
              <p> {stockDetails.enDusukFiyat}₺</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">En Yüksek Fiyat:</p>
              <p> {stockDetails.enYuksekFiyat}₺</p>
            </div>
            <div className=" flex ">
              <p className="mr-2 text-blue-800 font-bold">Kapanış Fiyatı:</p>
              <p> {stockDetails.kapanisFiyat}₺</p>
            </div>
            <div className="flex ">
              <p className="mr-2 text-blue-800 font-bold">
                Toplam İşlem Hacmi(TL):
              </p>
              <p>
                {" "}
                {stockDetails.toplamIslemHacmi?.$numberLong ??
                  stockDetails.toplamIslemHacmi}
                ₺{" "}
              </p>
            </div>
            <div className=" flex ">
              <p className="mr-2 text-blue-800 font-bold">
                Toplam İşlem Miktarı:
              </p>
              <p> {stockDetails.toplamIslemMiktari}</p>
            </div>
          </div>
        </div>

        

        <div className="mt-5 flex justify-content-center">
          <Button
            label="Geri"
            icon="pi pi-angle-left"
            size="Normal"
            className="border-round-xl"
            onClick={onNavClick}
          />
        </div>
      </Card>
    </div>
  );
}

export default HisseDetail;
