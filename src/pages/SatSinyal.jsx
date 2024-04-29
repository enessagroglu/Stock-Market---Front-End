import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import asset from "../assets/satSayfa.webp";

export default function SatSinyal() {
  const [sinyalVeri, setSinyalVeri] = useState([]);

  useEffect(() => {
    import("../data/SatimSinyalHisse.json")
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
          <Card
            title="Sat Sinyali Verenler"
            className="text-blue-700 shadow-3 "
          >
            <div className="flex justify-content-center flex-wrap ">
              <img
                src={asset}
                className="border-round-3xl"
                style={{ width: "600px", height: "600px" }}
              />
            </div>
            <div className="flex justify-content-center ">
              <p className="mt-3 mb-5 w-9 ">
                Hisse senedi piyasasında başarılı işlemler yapabilmek için
                indikatörlerin doğru kullanımı büyük önem taşır. Bu analitik
                araçlar, piyasanın mevcut durumunu ve gelecekteki eğilimlerini
                anlamanıza yardımcı olur. Yatırım kararlarınızda indikatörlerden
                yararlanarak, riskleri minimize etmek ve fırsatları zamanında
                yakalamak mümkün olur. Etkili bir yatırım stratejisi
                geliştirirken, çeşitli indikatörlerle donatılmış bir analiz
                süreci uygulamak, uzun vadede istikrarlı getiriler elde etmenizi
                sağlar. Hatırlatmak gerekir ki, her indikatör farklı veri
                setleri sunar ve bu bilgiler ışığında hareket etmek,
                yatırımcılar için bilinçli seçimler yapma fırsatı sunar.
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
