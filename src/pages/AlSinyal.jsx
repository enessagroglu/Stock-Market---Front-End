import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import asset from "../assets/alsayfa.webp";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import "../components/Sinyaller/cardkucultme.css";
import { useNavigate } from 'react-router-dom';


export default function AlSinyal() {
  const [sinyalVeri, setSinyalVeri] = useState([]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "bultenAdi": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const navigate = useNavigate();

  const onRowClick = (rowData) => {
    navigate(`/hisse/${rowData.data.bultenAdi}`);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Arayın..."
        />
      </div>
    );
  };

  const header = renderHeader();

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

  function red_or_green(value) {
    if (value === "Kuvvetli Al") {
      return "text-green-700";
    } else {
      return "text-red-700";
    }
  }

  return (
    <>
      <div class="mt-5">
        <div
          className="card justify-content-center flex-wrap w-10 "
          style={{ marginLeft: "150px" }}
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
                rows={10}
                dataKey="name"
                onRowClick={onRowClick}
                style={{cursor: "pointer" }}
                filters={filters}
                filterDisplay="row"
                globalFilterFields={[
                  "islemKodu",
                  "EMA_Signal",
                  "RSI_Value",
                  "RSI_Signal",
                  "sektorAdi",
                  "enDusukFiyat",
                  "enYuksekFiyat",
                  "kapanisFiyat",
                  "bultenAdi",
                ]}
                header={header}
                emptyMessage="Veri bulunamadı."
              >
                <Column
                  field="bultenAdi"
                  header="İsim"
                  sortable
                  style={{ minWidth: "14rem", color: "#1C80CF" }}
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
                  style={{ minWidth: "8rem", color: "#1C80CF" }}
                  className="text-blue-700"
                  body={(rowData) => {
                    return (
                      <span
                        className={`${red_or_green(
                          rowData.EMA_Signal
                        )} font-bold`}
                      >
                        {rowData.EMA_Signal}
                      </span>
                    );
                  }}
                />
                <Column
                  field="RSI_Value"
                  header="RSI Değeri"
                  sortable
                  style={{ minWidth: "8rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="enDusukFiyat"
                  header="En Düşük Fiyat"
                  sortable
                  style={{ minWidth: "9rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="enYuksekFiyat"
                  header="En Yüksek Fiyat"
                  sortable
                  style={{ minWidth: "8rem", color: "#1C80CF" }}
                  className="text-blue-700"
                />
                <Column
                  field="kapanisFiyat"
                  header="Kapanış Fiyatı"
                  sortable
                  style={{ minWidth: "8rem", color: "#1C80CF" }}
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
