import React, { useState, useEffect } from 'react';
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function SectorDetail({ selectedSector }) {
  const [matchingStocks, setMatchingStocks] = useState([]);
  const [sectorName, setSectorName] = useState("");

  useEffect(() => {
    const fetchStockData = async () => {
        console.log(selectedSector)
      // Dosyanızın yolu
      const response = await import('../../data/guncelHisseVerileri.json');
      const stocks = response.default;
      

      const turkceKarakterleriDuzeltVeBoslukSil = (text) => {
        return text
          .replace(/ğ/g, 'g')
          .replace(/ü/g, 'u')
          .replace(/ş/g, 's')
          .replace(/ı/g, 'i')
          .replace(/ö/g, 'o')
          .replace(/ç/g, 'c')
          .replace(/Ğ/g, 'G')
          .replace(/Ü/g, 'U')
          .replace(/Ş/g, 'S')
          .replace(/İ/g, 'I')
          .replace(/Ö/g, 'O')
          .replace(/Ç/g, 'C')
          .replace(/\s+/g, '') // Boşlukları kaldır
          .toLowerCase();
      };

      const filteredStocks = stocks.filter((stock) =>
        turkceKarakterleriDuzeltVeBoslukSil(stock.sektorAdi) === selectedSector
      );
      setSectorName(filteredStocks[0].sektorAdi);
      setMatchingStocks(filteredStocks);
    };

    fetchStockData();
  }, [selectedSector]);

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
    <div>
      <h3>Sektör: {sectorName}</h3>
      <div className="card">
              <DataTable value={matchingStocks} paginator rows={10}>
                <Column
                  field="bultenAdi"
                  header="Şirket Adı"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="islemKodu"
                  header="İşlem Kodu"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="enYuksekFiyat"
                  header="En Yüksek Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "enYuksekFiyat")}
                  sortable
                  className="text-green-500"
                ></Column>
                <Column
                  field="enDusukFiyat"
                  header="En Düşük Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "enDusukFiyat")}
                  sortable
                  className="text-red-500"
                ></Column>
                <Column
                  field="kapanisFiyat"
                  header="Kapanış Fiyatı"
                  body={(rowData) => currencyTemplate(rowData, "kapanisFiyat")}
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="toplamIslemHacmi(TL)"
                  header="Toplam İşlem Hacmi(TL)"
                  body={(rowData) =>
                    currencyTemplate(rowData, "toplamIslemHacmi(TL)")
                  }
                  sortable
                  className="text-cyan-600"
                ></Column>
              </DataTable>
            </div>
    </div>
  );
}
