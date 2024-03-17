import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import sektorData from "../../data/testDB.sektor.json";
import { FilterMatchMode, FilterService } from "primereact/api";
import { Card } from "primereact/card";
import cardImage from "../../assets/sector.webp";

export default function Sector() {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    global: { value: globalFilterValue, matchMode: FilterMatchMode.CONTAINS },
  });

  const headerCard = (
    <img alt="Card" src={cardImage} className="border-round-top-xl" />
  );

  useEffect(() => {
    let tempData = [];
    let i = 0;

    setLoading(true);
    for (const sector of sektorData) {
      let temp = { name: sector.sektorAdi, id: i };
      tempData.push(temp);
      i++;
    }
    setSectors(tempData);

    setLoading(false);
  }, []);

  const clearFilter = () => {
    setGlobalFilterValue("");
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Temizle"
          outlined
          onClick={clearFilter}
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Arama yapın..."
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <>
      <div className="flex">
        <div className="col-8">
          <DataTable
            value={sectors}
            paginator
            showGridlines
            rows={10}
            loading={loading}
            filters={globalFilterValue}
            dataKey="name"
            globalFilterFields={["name"]}
            header={header}
            emptyMessage="Sektör bulunamadı."
          >
            <Column
              field="name"
              header="İsim"
              sortable
              style={{ minWidth: "12rem", color: "#1C80CF" }}
              className="text-blue-700"
            />
          </DataTable>
        </div>
        <div
          className="col-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            title="Yatırımın Anahtarı: Sektörler Arasında Gezinti"
            header={headerCard}
            className="md:w-25rem mr-5 shadow-5"
          >
            <p className="m-0">
              Farklı sektörlere yatırım yapmak, portföyünüzü çeşitlendirmenin
              kritik bir yoludur. Bu strateji, riski azaltır ve getiri
              potansiyelini artırır. Ayrıca, piyasa döngülerine karşı daha
              dayanıklı hale gelmenizi sağlar ve farklı fırsatları değerlendirme
              şansınızı artırır. Sonuç olarak, farklı sektörlere yatırım yaparak
              daha dengeli ve sağlam bir yatırım portföyü oluşturabilirsiniz.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
