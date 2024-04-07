import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import sektorData from "../data/testDB.aylıkSektörArtışı.json";
import { Card } from "primereact/card";
import cardImage from "../assets/sector.webp";
import SectorDetail from "../components/Sector/SectorDetail";
import { Button } from "primereact/button";

export default function Sector() {
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSector, setSelectedSector] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const headerCard = (
    <img alt="Card" src={cardImage} className="border-round-top-xl" />
  );

  const turkceStringiDuzelt = (text) => {
    const turkceKarakterler = {
      ç: "c",
      ğ: "g",
      ı: "i",
      ö: "o",
      ş: "s",
      ü: "u",
      Ç: "c",
      Ğ: "g",
      İ: "i",
      Ö: "o",
      Ş: "s",
      Ü: "u",
    };

    const duzeltilmisVeBoslukSilinmisText = text
      .replace(/[çğıöşüÇĞİÖŞÜ]/g, (match) => turkceKarakterler[match])
      .replace(/\s+/g, "") // Boşlukları sil
      .toLowerCase();

    return duzeltilmisVeBoslukSilinmisText;
  };

  const handleSelection = (name) => {
    var sector = turkceStringiDuzelt(name);
    setSelectedSector(sector);
    setIsSelected(true);
  };

  const handleSelectionClear = () => {
    setSelectedSector(null);
    setIsSelected(false);
  };

  useEffect(() => {
    let tempData = [];
    let i = 0;

    setLoading(true);
    for (const sector of sektorData) {
      let temp = {
        name: sector.sektorAdi,
        id: i,
        artisOrani: sector.artisOrani,
      };
      tempData.push(temp);
      i++;
    }
    setSectors(tempData);

    setLoading(false);
  }, []);

  const renderContent = () => {
    if (isSelected) {
      return (
        <>
          <div class="mt-5">
            <div
              className="card  justify-content-center flex-wrap w-7 "
              style={{ marginLeft: "20%" }}
            >
              <SectorDetail selectedSector={selectedSector} />
              <div className="card flex mt-5 border-round justify-content-center">
                <Button onClick={handleSelectionClear} label="Seçimi Temizle" />
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="flex">
        <div className="col-8">
          <DataTable
            selectionMode="single"
            selection={selectedSector}
            onSelectionChange={(e) => handleSelection(e.value.name)}
            value={sectors}
            paginator
            showGridlines
            rows={10}
            loading={loading}
            dataKey="name"
            globalFilterFields={["name"]}
            emptyMessage="Sektör bulunamadı."
          >
            <Column
              field="name"
              header="İsim"
              sortable
              style={{ minWidth: "12rem", color: "#1C80CF" }}
              className="text-blue-700"
            />
            <Column
              field="artisOrani"
              header="Artış Oranı"
              sortable
              style={{ minWidth: "12rem" }}
              className="text-blue-700"
              body={(rowData) => {
                const artisOrani = parseFloat(rowData.artisOrani);
                const formattedValue = "%" + artisOrani.toFixed(3);
                let color = artisOrani < 0 ? "red" : "green";

                return <span style={{ color }}>{formattedValue}</span>;
              }}
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
    );
  };

  return (
    <>
      <div className="col-10 col-offset-1">
        <Card
          title="Fırsatların Dünyası: Hangi Sektör Sizi Bekliyor?"
          className="text-blue-700"
        >
          {renderContent()}
        </Card>
      </div>
    </>
  );
}
