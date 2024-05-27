import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import "../../components/Sinyaller/cardkucultme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import guncelVeri from "../../data/guncelHisseVerileri.json";
import { useNavigate } from 'react-router-dom';

export default function HisseTable() {
  const [hisseVeri, setHisseVeri] = useState([]);

  useEffect(() => {
    setHisseVeri(guncelVeri);
  }, []);

  const navigate = useNavigate();

  const onRowClick = (rowData) => {
    navigate(`/hisse/${rowData.data.bultenAdi}`);
  };

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    bultenAdi: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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

  const formatCurrency = (value) => {
    let number;
    if (value && typeof value === "object" && value.$numberLong) {
      number = value.$numberLong;
    } else {
      number = value;
    }

    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  };
  const currencyTemplate = (rowData, field) => {
    return formatCurrency(rowData[field]);
  };

  return (
    <>
      <div>
        <Card title="Tüm Hisse Senetleri" className="text-blue-700 shadow-3 ">
          <div className="">
            <DataTable
              value={hisseVeri}
              paginator
              rows={10}
              onRowClick={onRowClick}
              dataKey="name"
              filters={filters}
              filterDisplay="row"
              globalFilterFields={[
                "islemKodu",
                "sektorAdi",
                "enDusukFiyat",
                "enYuksekFiyat",
                "kapanisFiyat",
                "bultenAdi",
              ]}
              header={header}
              emptyMessage="Veri bulunamadı."
              style={{cursor: "pointer" }}
            >
              <Column
                field="bultenAdi"
                header="İsim"
                sortable
                style={{ minWidth: "14rem", color: "#1C80CF" }}
                className="text-blue-700"
              />
              <Column
                field="pazarAdi"
                header="Pazar Adı"
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
                field="enDusukFiyat"
                header="En Düşük Fiyat"
                sortable
                body={(rowData) => currencyTemplate(rowData, "enDusukFiyat")}
                style={{ minWidth: "8rem", color: "#1C80CF" }}
                className="text-red-700"
              />
              <Column
                field="enYuksekFiyat"
                header="En Yüksek Fiyat"
                body={(rowData) => currencyTemplate(rowData, "enYuksekFiyat")}
                sortable
                style={{ minWidth: "8rem", color: "#1C80CF" }}
                className="text-green-700"
              />
              <Column
                field="kapanisFiyat"
                header="Kapanış Fiyatı"
                sortable
                body={(rowData) => currencyTemplate(rowData, "kapanisFiyat")}
                style={{ minWidth: "8rem", color: "#1C80CF" }}
                className="text-blue-700"
              />
              <Column
                field="toplamIslemHacmi"
                header="Toplam İşlem Hacmi(TL)"
                sortable
                body={(rowData) =>
                  currencyTemplate(rowData, "toplamIslemHacmi")
                }
                style={{ minWidth: "8rem", color: "#1C80CF" }}
                className="text-blue-700"
              />
            </DataTable>
          </div>
        </Card>
      </div>
    </>
  );
}
