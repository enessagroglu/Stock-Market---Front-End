import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import asset from "../assets/alsayfa.webp";

export default function AlSinyal() {
  const [sinyalVeri, setSinyalVeri] = useState([]);

  useEffect(() => {
    import("../data/AlimSinyalHisse.json")
      .then((data) => {
        const newData = data.default.map((item) => {
          if (item.RSI_Value) {
            return { ...item, RSI_Value: item.RSI_Value.toFixed(2) };
          }
          return item;
        });
        setSinyalVeri(newData);
      })
      .catch((error) => {
        console.error("Veri yüklenirken hata meydana geldi:", error);
      });
  }, []);

  return (
    <>
      <div class="mt-5">
        <div
          className="card  justify-content-center flex-wrap w-7 "
          style={{ marginLeft: "20%" }}
        >
          <Card title="Al Sinyali Verenler" className="text-blue-700 shadow-3 ">
            <div className="flex justify-content-center flex-wrap ">
              <img
                src={asset}
                className="border-round-3xl"
                style={{ width: "600px", height: "600px" }}
              />
            </div>
            <div className="flex justify-content-center ">
              <p className="mt-3 mb-5 w-9 ">
                Hisse senedi alım satımı yaparken, indikatörlerin kullanılması
                kritik bir öneme sahiptir. Bu araçlar, piyasanın genel yönünü ve
                potansiyel dönüş noktalarını belirlemenize yardımcı olur.
                İndikatörler, yatırım kararlarınızı destekleyen veriler
                sağlayarak, piyasada bilinçli hareket etmenize olanak tanır. Her
                yatırımcının, alım satım stratejilerini şekillendirirken bu tür
                araçları dikkate alması önerilir. Unutmayın, doğru analiz ve
                zamanında uygulanan stratejiler, yatırım yolculuğunuzda başarıya
                ulaşmanın anahtarlarıdır.
              </p>
            </div>

            <div className="">
              <DataTable
                value={sinyalVeri}
                paginator
                showGridlines
                rows={10}
                dataKey="name"
              >
                <Column
                  field="bultenAdi"
                  header="İsim"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="islemKodu"
                  header="İşlem Kodu"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="EMA_Signal"
                  header="EMA Sinyal"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="RSI_Value"
                  header="RSI Değeri"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="enDusukFiyat"
                  header="En Düşük Fiyat"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="enYuksekFiyat"
                  header="En Yüksek Fiyat"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="kapanisFiyat"
                  header="Kapanış Fiyatı"
                  sortable
                  style={{ minWidth: "12rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
              </DataTable>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
